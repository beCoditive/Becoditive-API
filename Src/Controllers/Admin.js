const APIKEYS = require('../../models/apikeys')

const uuid = require('../Utilities/functions').uuid

exports.newAPIKEY = async (req, res, next) => {
  try {
    const { email } = req.body

    const blockedExtentions = require('../../blocked/extensions').extensions
    const blockedDomains = require('../../blocked/domains').domains

    const domain = email.split('@')[1]

    if (blockedDomains.includes(domain)) {
      return res.render('main', { message: 'domain' })
    }

    let extension = domain.split('.')
    extension = extension[extension.length - 1]

    if (blockedExtentions.includes(`.${extension}`)) {
      return res.render('main', { message: 'extension' })
    }

    const key = uuid()

    const data = await APIKEYS.create({
      email,
      apikey: key
    })

    res.render('main', { message: 'success', key })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.render('main', { message: 'duplicate' })
    } else {
      res.status(500).json({
        error: error
      })
    }
  }
}

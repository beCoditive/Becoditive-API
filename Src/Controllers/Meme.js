const Memes = require('../../models/memes')

exports.dcmemes = async (req, res, next) => {
  try {
    const data = await Memes.find({ category: 'discordmemes' })
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      meme: randomData.meme,
      category: randomData.category
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

exports.memes = async (req, res, next) => {
  try {
    const data = await Memes.find()
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      meme: randomData.meme,
      category: randomData.category
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

exports.meirl = async (req, res, next) => {
  try {
    const data = await Memes.find({ category: 'meirl' })
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      meme: randomData.meme,
      category: randomData.category
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

exports.blactwitter = async (req, res, next) => {
  try {
    const data = await Memes.find({ category: 'black twitter' })
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      url: randomData.meme
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

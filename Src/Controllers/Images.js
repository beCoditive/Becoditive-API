const { Canvas } = require('canvas-constructor')
const canvas = require('canvas')
const jimp = require('jimp')

exports.delete = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/delete.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    const pngChecker = req.query.image.endsWith('.png')
    const jpgChecker = req.query.image.endsWith('.jpg')

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(550, 267)
        .printImage(bg, 0, 0, 550, 267)
        .printImage(logo, 95, 105, 135, 135)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(550, 267)
        .printImage(bg, 0, 0, 550, 267)
        .printImage(logo, 95, 105, 135, 135)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.ad = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/ad.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    const pngChecker = req.query.image.endsWith('.png')
    const jpgChecker = req.query.image.endsWith('.jpg')

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(550, 474)
        .printImage(logo, 150, 75, 230, 230)
        .printImage(bg, 0, 0, 550, 474)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(550, 474)
        .printImage(logo, 150, 75, 230, 230)
        .printImage(bg, 0, 0, 550, 474)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.hitler = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/hitler.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(480, 360)
        .printImage(bg, 0, 0, 480, 360)
        .printImage(logo, 46, 45, 140, 140)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(480, 360)
        .printImage(bg, 0, 0, 480, 360)
        .printImage(logo, 46, 45, 140, 140)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.jail = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/jail.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(500, 500)
        .printImage(logo, 0, 0, 500, 500)
        .printImage(bg, 0, 0, 500, 500)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(500, 500)
        .printImage(logo, 0, 0, 500, 500)
        .printImage(bg, 0, 0, 500, 500)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.gay = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/gay.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(500, 500)
        .printImage(logo, 0, 0, 500, 500)
        .printImage(bg, 0, 0, 500, 500)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(500, 500)
        .printImage(logo, 0, 0, 500, 500)
        .printImage(bg, 0, 0, 500, 500)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.wanted = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/wanted.jpg')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(626, 876)
        .printImage(bg, 0, 0, 626, 876)
        .printImage(logo, 194, 295, 235, 235)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(626, 876)
        .printImage(bg, 0, 0, 626, 876)
        .printImage(logo, 194, 295, 235, 235)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.bluediscord = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/discordblue.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(500, 500)
        .printImage(logo, 0, 0, 500, 500)
        .printImage(bg, 0, 0, 500, 500)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(500, 500)
        .printImage(logo, 0, 0, 500, 500)
        .printImage(bg, 0, 0, 500, 500)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.rip = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/rip.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(642, 806)
        .printImage(bg, 0, 0, 642, 806)
        .printImage(logo, 196, 378, 250, 250)
        .toBuffer()

      res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(642, 806)
        .printImage(bg, 0, 0, 642, 806)
        .printImage(logo, 196, 378, 250, 250)
        .toBuffer()

      res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.speia = async (req, res, next) => {
  try {
    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      let image = await jimp.read(req.query.image)

      image = image.sepia()

      let raw
      image.getBuffer('image/png', (err, buffer) => {
        raw = buffer
      })

      await res.set({ 'Content-Type': 'image/png' })
      res.send(raw)
    } else if (req.query.image.endsWith('.jpg') === true) {
      let image = await jimp.read(req.query.image)

      image = image.sepia()

      let raw
      image.getBuffer('image/png', (err, buffer) => {
        raw = buffer
      })

      await res.set({ 'Content-Type': 'image/jpg' })
      res.send(raw)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.firsttime = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/first-time.jpg')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(1427, 890)
        .printImage(bg, 0, 0, 1427, 890)
        .printImage(logo, 400, 170, 350, 350)
        .toBuffer()

      await res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(1427, 890)
        .printImage(bg, 0, 0, 1427, 890)
        .printImage(logo, 400, 170, 350, 350)
        .toBuffer()

      await res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.jokeoverhead = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/jokeoverhead.jpg')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const canvas1 = canvas.createCanvas(250, 238)
      const logo = await canvas.loadImage(req.query.image)
      const ctx = canvas1.getContext('2d')

      ctx.drawImage(bg, 0, 0, 250, 238)

      ctx.beginPath()
      ctx.arc(110, 110, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.clip()

      ctx.drawImage(logo, 60, 60, 100, 100)
      const output = canvas1.toBuffer()

      await res.set({ 'Content-Type': 'image/png' })
      res.send(output)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const canvas1 = canvas.createCanvas(250, 238)
      const logo = await canvas.loadImage(req.query.image)
      const ctx = canvas1.getContext('2d')

      ctx.drawImage(bg, 0, 0, 250, 238)

      ctx.beginPath()
      ctx.arc(110, 110, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.clip()

      ctx.drawImage(logo, 60, 60, 100, 100)
      const output = canvas1.toBuffer()

      await res.set({ 'Content-Type': 'image/jpg' })
      res.send(output)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.captcha = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/captcha.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const canvas1 = canvas.createCanvas(305, 458)
      const logo = await canvas.loadImage(req.query.image)
      const ctx = canvas1.getContext('2d')

      ctx.drawImage(bg, 0, 0, 305, 458)

      ctx.drawImage(logo, 7, 100, 90, 90)

      ctx.drawImage(logo, 7, 195, 90, 90)

      ctx.drawImage(logo, 7, 290, 90, 90)

      ctx.drawImage(logo, 107, 100, 90, 90)

      ctx.drawImage(logo, 107, 195, 90, 90)

      ctx.drawImage(logo, 107, 290, 90, 90)

      ctx.drawImage(logo, 207, 100, 90, 90)

      ctx.drawImage(logo, 207, 195, 90, 90)

      ctx.drawImage(logo, 207, 290, 90, 90)

      const output = canvas1.toBuffer()

      await res.set({ 'Content-Type': 'image/png' })
      res.send(output)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const canvas1 = canvas.createCanvas(305, 458)
      const logo = await canvas.loadImage(req.query.image)
      const ctx = canvas1.getContext('2d')

      ctx.drawImage(bg, 0, 0, 305, 458)

      ctx.drawImage(logo, 7, 100, 90, 90)

      ctx.drawImage(logo, 7, 195, 90, 90)

      ctx.drawImage(logo, 7, 290, 90, 90)

      ctx.drawImage(logo, 107, 100, 90, 90)

      ctx.drawImage(logo, 107, 195, 90, 90)

      ctx.drawImage(logo, 107, 290, 90, 90)

      ctx.drawImage(logo, 207, 100, 90, 90)

      ctx.drawImage(logo, 207, 195, 90, 90)

      ctx.drawImage(logo, 207, 290, 90, 90)

      const output = canvas1.toBuffer()

      await res.set({ 'Content-Type': 'image/jpg' })
      res.send(output)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.kimborder = async (req, res, next) => {
  try {
    const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/kimborder.png')

    if (!req.query.image) {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'no image was provide.'
      })
      return next()
    }

    if (req.query.image.endsWith('.png') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(960, 639)
        .printImage(logo, 0, 350, 500, 350)
        .printImage(bg, 0, 0, 960, 639)
        .toBuffer()

      await res.set({ 'Content-Type': 'image/png' })
      res.send(image)
    } else if (req.query.image.endsWith('.jpg') === true) {
      const logo = await canvas.loadImage(req.query.image)

      const image = new Canvas(960, 639)
        .printImage(logo, 0, 350, 500, 350)
        .printImage(bg, 0, 0, 960, 639)
        .toBuffer()

      await res.set({ 'Content-Type': 'image/jpg' })
      res.send(image)
    } else {
      res.status(400).json({
        error: true,
        code: 400,
        message: 'only jpg or png type of images are allowed.'
      })
      return next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

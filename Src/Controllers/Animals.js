const Animals = require('../../models/animals')

exports.cat = async (req, res, next) => {
  try {
    const data = await Animals.find({ animal: 'cats' })
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      image: randomData.image,
      fact: randomData.fact
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

exports.bird = async (req, res, next) => {
  try {
    const data = await Animals.find({ animal: 'birds' })
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      image: randomData.image,
      fact: randomData.fact
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

exports.dog = async (req, res, next) => {
  try {
    const data = await Animals.find({ animal: 'dogs' })
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      image: randomData.image,
      fact: randomData.fact
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

exports.panda = async (req, res, next) => {
  try {
    const data = await Animals.find({ animal: 'pandas' })
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.status(200).json({
      image: randomData.image,
      fact: randomData.fact
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

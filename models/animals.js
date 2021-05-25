const mongoose = require('mongoose')

const animalsSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
    unique: true
  },
  animal: {
    type: String,
    required: true
  },
  fact: {
    type: String,
    required: true,
    unique: true
  }
},
{
  versionKey: false
}
)

module.exports = mongoose.model('Animals', animalsSchema)

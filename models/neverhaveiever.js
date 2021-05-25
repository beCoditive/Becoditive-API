const mongoose = require('mongoose')

const neverSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true
  },
  nsfw: {
    type: Boolean,
    required: true
  }
},
{
  versionKey: false
}
)

module.exports = mongoose.model('neverhaveiever', neverSchema)

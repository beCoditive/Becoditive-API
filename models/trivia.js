const mongoose = require('mongoose')

const triviaSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true
  },
  answer: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  option: {
    type: Array,
    required: true
  }
},
{
  versionKey: false
}
)

module.exports = mongoose.model('quiz', triviaSchema)

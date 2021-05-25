const mongoose = require('mongoose')

const truthorDareSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  }
},
{
  versionKey: false
}
)

module.exports = mongoose.model('truth and dares', truthorDareSchema)

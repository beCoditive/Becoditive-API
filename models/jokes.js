const mongoose = require('mongoose')

const jokesSchema = mongoose.Schema({
  joke: {
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

module.exports = mongoose.model('jokes', jokesSchema)

const mongoose = require('mongoose')

const letsnotmeetSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  story: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  }
},
{
  versionKey: false
}
)

module.exports = mongoose.model('Stories', letsnotmeetSchema)

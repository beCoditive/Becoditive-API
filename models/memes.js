const mongoose = require('mongoose')

const memeSchema = mongoose.Schema({
    meme : {
        type : String,
        required : true,
        unique : true
    },
    category : {
        type : String,
        required : true
    }
},
{
    versionKey: false
}
)

module.exports = mongoose.model('memes', memeSchema);
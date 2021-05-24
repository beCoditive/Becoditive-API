const mongoose = require('mongoose')

const wouldSchema = mongoose.Schema({
    question : {
        type : String,
        required : true,
        unique : true
    },
    nsfw : {
        type : Boolean,
        required : true,
    }
},
{
    versionKey: false
}
)

module.exports = mongoose.model('wouldyourather', wouldSchema);
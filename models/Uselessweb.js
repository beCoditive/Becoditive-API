const mongoose = require('mongoose')

const uselesswebSchema = mongoose.Schema({
    link : {
        type : String,
        required : true,
        unique : true
    },
},
{
    versionKey: false
}
)

module.exports = mongoose.model('Useless Websites', uselesswebSchema);
const mongoose = require('mongoose')

const flirtSchema = mongoose.Schema({
    flirt : {
        type : String,
        required : true,
        unique : true
    },
},
{
    versionKey: false
}
)

module.exports = mongoose.model('flirts', flirtSchema);
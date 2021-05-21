const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema({
    quote : {
        type : String,
        required : true,
        unique : true
    },
    author : {
        type : String,
        required : true
    }
},
{
    versionKey: false
}
)

module.exports = mongoose.model('quotes', quoteSchema);
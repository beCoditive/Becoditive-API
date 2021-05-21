const mongoose = require('mongoose')

const fakecreditCardSchema = mongoose.Schema({
    type : {
        type : String,
        required : true,
    },
    number : {
        type : String,
        unique : true
    },
    expiration : {
        type : String,
        required : true,
    },
    owner : {
        type : String,
        required : true,
        unique : true
    }
},
{
    versionKey: false
}
)

module.exports = mongoose.model('Fake Credit', fakecreditCardSchema);
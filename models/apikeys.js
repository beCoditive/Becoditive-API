const mongoose = require('mongoose')

const apiSchema = mongoose.Schema({
    apikey : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    uses : {
        type : Number,
        default : 0,
    },
    type : {
        type : String,
        default : "user"
    },
    createAt : {
        type : Date,
        default : new Date
    }
},
{
    versionKey: false
}
)

module.exports = mongoose.model('API Keys', apiSchema);
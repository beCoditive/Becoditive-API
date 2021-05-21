const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    title : {
        type : String,
    },
    url : {
        type : String,
        required : true
    },
    shortId : {
        type : String,
        required : true
    },
    clicks : {
        type : Number,
        default : 0
    },
    description : {
        type : String,
    },
    logo : {
        type : String
    },
    owner : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : new Date
    },
    domain : {
        type : String,
        default : "dscl.xyz"
    }
},
{
    versionKey: false
}
)

module.exports = mongoose.model('short urls', urlSchema);
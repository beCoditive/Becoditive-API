const mongoose = require('mongoose')

const songsSChema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    singer : {
        type : Array,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    genre : {
        type : Array,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    language : {
        type : Array,
        required : true
    }
},
{
    versionKey: false
}
)

module.exports = mongoose.model('songs', songsSChema);
const mongoose = require('mongoose')

const factSchema = mongoose.Schema({
    fact : {
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

module.exports = mongoose.model('facts', factSchema);
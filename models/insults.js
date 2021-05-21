const mongoose = require('mongoose')

const insultsSchema = mongoose.Schema({
    insult : {
        type : String,
        required : true,
        unique : true
    },
},
{
    versionKey: false
}
)

module.exports = mongoose.model('insults', insultsSchema);
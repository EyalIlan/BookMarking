const mongoose = require('mongoose')


const BookMarkSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    }

})

const BookMark = mongoose.model('bookmark',BookMark)

module.exports = BookMark
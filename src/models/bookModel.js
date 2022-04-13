const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema( {

    bookName: {type:String, required:true},
    Price: {
        indianPrice:String,
        europePrice:String
    },
    year:{default:2022 ,type:Number},
    Tags:[String],
    authorName:String,
totalpages: Number,
stockAvailable: Boolean

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 



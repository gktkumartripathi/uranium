const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId
const developerSchema = new mongoose.Schema( {
    name: String,
    
    percentage: Number,
     batch: {
        type: ObjectId,
        ref: "newbatch"
     },
     gender: {
         type: String,
         enum: ["male","female","other"]
     }
}, { timestamps: true });

module.exports = mongoose.model('newdeveloper', developerSchema)
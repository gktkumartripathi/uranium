const batchModel = require("../models/batchModel")
const developerModel =require("../models/developerModel")





//problem no 1

const createDeveloper = async function (req,res){
    let developer = req.body
    let savedData = await developerModel.create(developer)
    res.send({msg: savedData})
}

// problem no 2

const createBatch = async function (req,res){
    let batch = req.body
    let savedData = await batchModel.create(batch)
    res.send({msg: savedData})
}



      //problem no 3

const fetchDeveloper = async function (req,res){
    let listOfdev = await developerModel.find({gender:"female",percentage:{$gte:70}}).populate('batch')
    res.send({msg: listOfdev})
}

// problem no 4 

const queryParam = async function(req,res){
    let getDetails = req.query;
    const data = await developerModel.find({percentage:{$gte:getDetails.percentage}}).select({batch:1, _id:1})
    const find = await batchModel.find({_id:data[0].batch,program:getDetails.program})
    res.send({data:find})
}







module.exports.createDeveloper = createDeveloper
module.exports.createBatch = createBatch
module.exports.fetchDeveloper = fetchDeveloper
module.exports.queryParam = queryParam
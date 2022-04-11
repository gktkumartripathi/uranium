const express = require('express');
const router = express.Router();
const BookModel= require("../models/userModel.js")
router.post("/createBook", async function(req,res){
    let data = req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
})
 
router.get("/getBooklist", async function(req,res){
    let allBooks = await BookModel.find()
    res.send({msg: allBooks})
})




module.exports = router;
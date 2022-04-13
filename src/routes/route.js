const express = require('express');
const router = express.Router();
  const BookModel = require("../models/bookModel")
//const BookController= require("../controllers/bookController")

router.post("/createBook", async function(req, res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
})

router.get("/bookList", async function(req,res){
    let data = req.body
    let savedData = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: savedData})
})

router.get("/BooksInYear", async function(req,res){

    let allBooksInYear = await BookModel.find({year:req.body.year})
    res.send({msg: allBooksInYear})
})
router.get("/ParticularBooks", async function(req,res){
    let allParticularBooks = await BookModel.find({'bookName':"drilling",'authorName':"gk"})
    res.send({msg: allParticularBooks})
})
router.get("/XINRBooks", async function(req,res){
    let allXINRBooks = await BookModel.find({'Price.indianPrice':{$in:["100INR","200INR","500INR"]}})

    res.send({msg:allXINRBooks})
})

router.get("/RandomBooks", async function(req,res){
    let allRandomBooks = await BookModel.find({$or:[{stockAvailable:true},{totalpages:{$gt:900}}]})
    res.send({msg: allRandomBooks})
})



module.exports = router;
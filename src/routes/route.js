const express = require('express');
const router = express.Router();
const allController = require("../controllers/allController")


router.post("/createDeveloper", allController.createDeveloper)
router.post("/createBatch",allController.createBatch )
router.get("/scholarship-developers", allController.fetchDeveloper)
router.get("/developers?percentage=value1&program=value2",allController.queryParam)
//const authorController= require("../controllers/authorController")
//const publisherController = require('../controllers/publisherController')
//const bookController= require("../controllers/bookController");
//const { route } = require('express/lib/application');

//router.get("/test-me", function (req, res) {
   // res.send("My first ever api!")
//})

//router.post("/createAuthor", authorController.createAuthor  )

//router.post('/createPublisher', publisherController.createPublisher)

//router.post("/createBook", bookController.createBook  )

//router.get('/get-all-books', bookController.fetchbooks)

//router.put('/books', bookController.updateBooks)

module.exports = router;
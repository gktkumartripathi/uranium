const express = require('express');
const router = express.Router();

const newController=require("../newController/mainController");


router.post("/createAuthor", newController.NewAuthor  )           

router.post("/CreatePublisher", newController.publisher)

router.get("/getBooksWithAuthorDetails", newController.getBooksWithAuthorDetails); 
router.post("/createBook",newController.createBook);
router.put("/newProblem", newController.newProblem)
router.put("/bigProblem",newController.bigProblem)



module.exports = router;
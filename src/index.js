const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const ip = require('ip')
const moment = require('moment')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        let loggedIn = true
        if(loggedIn==true){
        
        let today = moment()
            let dateT = today.format('YYYY-MM-DD HH:MM:SS')
            let url = req.originalUrl
        console.log (dateT+","+ip.address()+","+url);
        next();
        } else {
            res.send({msg:"please logged first"})
        }
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

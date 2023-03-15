// firing the express server

const express = require('express');
const app = express();

const port = 8000;

// using connection to db
const config = require('./Config/config');

// using paths
const path = require('path');
// setting the template engine
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'Views'));

// using body parser
app.use(express.urlencoded());

// using statics

app.use(express.static('./Assets'));


// using router middleware
app.use(require('./Routes/routes'));




app.listen(port,(err)=>{
    if(err)
    {
        console.log(`Error in running the server : ${err}`)
        return;
    }
    console.log(`Server is Running on Port :${port}`);
});

// app.get('/',(request , response)=>{return response.render('index')})
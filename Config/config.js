// require mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017');

const db= mongoose.connection;
db.on('error',(error)=>{
    console.error(console,'Error in connecting to DataBase!');
});
db.once('open',()=>{
    console.log("connected to db successfully");
});
// firing the express server

const express = require('express');
const app = express();
const port = 8000;

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`Error in running the server : ${err}`)
        return;
    }
    console.log(`Server is Running on Port :${port}`);
});

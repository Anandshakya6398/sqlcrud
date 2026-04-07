const express = require('express');

const app = express();

//middleware

//routes
app.get("/test", (req,res) => {
    res.status(200)
    .send("<h1> Nodejs + SQL  sample</h1>");
});

const PORT = 8080;

//listen
app.listen(PORT, () =>{
    console.log("server Running");
});
const express = require('express');
const colors = require ('colors');
const app = express();
const dotenv = require("dotenv");
const morgan = require ("morgan");

//config   dotenv
dotenv.config();

//middleware
app.use(morgan("dev"));

//routes
app.get("/test", (req,res) => {
    res.status(200)
    .send("<h1> Nodejs + SQL  sample</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () =>{
    console.log("server Running.".bgMagenta.white);
});
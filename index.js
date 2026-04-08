const express = require('express');
const colors = require('colors');
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const mySqlPool = require('./config/db');

//config   dotenv
dotenv.config();

//middleware
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/student", require("./routes/studentsRoute"));
app.get("/test", (req, res) => {
    res.status(200)
        .send("<h1> Nodejs + SQL sample</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//condtional listen
mySqlPool.query('SELECT 1')
    .then(() => {
        //MYSQL
        console.log('MYSQL DB CONNECTION'.bgCyan)

        //listen
        app.listen(PORT, () => {
            console.log("server Running.".bgMagenta.white);
        });

    }).catch((error) => {
        console.log(error);
    });
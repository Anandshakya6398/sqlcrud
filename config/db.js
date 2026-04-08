const mysql = require("mysql2/promise")

const mySqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'anand',
    database: 'schooldb',
});

module.exports = mySqlPool;
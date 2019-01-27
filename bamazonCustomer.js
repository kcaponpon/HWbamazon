var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "bamazon_db"
});

// Successfully connected MySQL and Node
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connect to mySQL with id: " + connection.threadId)
});


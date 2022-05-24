const mySql = require('mysql');

const con = mySql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"xoka_challenge"
})

con.connect(function(err){
    if(err){
        console.log("Sorry error connecting to DB",err);
    }
    console.log("Connection successfully established");
})

module.exports = con;

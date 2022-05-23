const mySql = require('mysql');


const con = mySql.createConnection({
    host:"",
    user:"",
    password:"",
    database:""
})

con.connect(function(err){
    if(err){
        console.log("Sorry error connecting to DB",err);
    }
    console.log("Connection successfully established");
})

module.exports = con;

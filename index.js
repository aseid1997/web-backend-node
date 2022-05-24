const express = require('express');
const bodyParser = require('body-parser')
const mySql = require('mysql')
// const studentRoute = require('./routes/studentRoute');


const app = express();
const port = process.env.port | 5000;

app.use(express.urlencoded({extended:false}));
  
app.use(express.json());

// app.use('/api',studentRoute.routes);

app.listen(port, ()=> console.log(`listening on port ${port}`));



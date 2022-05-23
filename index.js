const express = require('express');
const bodyParser = require('body-parser')
const mySql = require('mysql')
const itemRoute = require('./routes/itemRoute');


const app = express();
const port = process.env.port | 3000;


app.use(express.urlencoded({extended:true}));
  
app.use(express.json());

app.use('/api',itemRoute.routes);

app.listen(port, ()=> console.log(`listening on port ${port}`));



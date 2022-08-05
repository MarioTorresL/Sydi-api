const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const responseTime = require('response-time')

// Create Express
const app = express();

// cors
app.use(cors());

// middleware to format json response
app.use(bodyParser.json({type:'application/json'}))

// logging developer
morgan('dev')

// middlewere for time response
responseTime()

app.listen( process.env.PORT , ()=>{
  console.log('Runing server in Port 3000')
});


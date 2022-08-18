const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const responseTime = require('response-time')
require('dotenv').config();


// create Express
const app = express();

//access to connection from the client
app.use(cors())

// middleware to format json response
app.use(bodyParser.json({type:'application/json'}))

// logging developer
morgan('dev')


// middlewere for time response
responseTime()

// ====routes====
app.use('/api/users', require('./src/routes/users'));
app.use('/api/roles', require('./src/routes/roles'));
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/companies', require('./src/routes/companies'));
app.use('/api/branchs', require('./src/routes/branchs'));
app.use('/api/employees',require('./src/routes/employees'))


// appListen
app.listen( process.env.PORT , ()=>{
  //console.log('Runing server in Port 3000')
  console.log(`Runing server in port ${process.env.PORT}`)
});


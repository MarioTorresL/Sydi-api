const express = require('express');
const cors = require('cors');

// Create Express
const app = express();

app.listen( process.env.PORT , ()=>{
  console.log('Runing server in Port 3000')
});
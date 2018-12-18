require('dotenv').config()
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const {SESSION_SECRET} = process.env

const app = express();

app.use( bodyParser.json() );

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))



app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})


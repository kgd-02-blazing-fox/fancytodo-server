require('dotenv').config()
const express = require('express');
const app = express();
const index = require('./routes/index.js');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', index);

app.listen(process.env.PORT, () => {
  console.log(`online!`);
})
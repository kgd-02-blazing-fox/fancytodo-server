const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const indexRoute = require('./routes/index.js')

app.use('/',indexRoute)

app.listen(PORT, () => {
  console.log(`Connection to port https://localhost:${PORT}`)
})

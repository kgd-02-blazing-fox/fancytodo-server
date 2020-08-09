require('dotenv').config()

const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes/index.js')
const { customError } = require('./middlewares/err.js')

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/', router);
app.use(customError);

app.listen(PORT, ()=> {
    console.log(`On PORT: ${PORT}`)
})
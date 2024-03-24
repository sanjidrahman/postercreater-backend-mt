const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()
const templateRoute = require('./routes/route')

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('DB Connected..!'))
    .catch((err) => console.log(err))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/file', express.static('public'))

app.use('/', templateRoute)

app.listen(8080, () => console.log('Server Connected..!'))
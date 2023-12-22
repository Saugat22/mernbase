const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('color')
const connectDb = require('./config/db')
const bodyParser = require('body-parser')
const goalRoutes = require('./Routes/goalRoutes')

connectDb()
const app = express()
app.use(bodyParser.json())
app.use(express.json())

app.use('/api/goals', require('./Routes/goalRoutes'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


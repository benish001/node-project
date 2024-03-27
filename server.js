const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

const dotenv  = require('dotenv').config();
const app = express();
var cors = require('cors')
app.use(cors())
connectDb();
const port = process.env.PORT | 5000;
app.use(express.json())
app.use('/api/backend',require( './routes/contactRoutes' ));
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

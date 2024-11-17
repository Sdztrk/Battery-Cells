"use strict"

const express = require('express');
const app = express();
// require("colors");
require('dotenv').config();
require('express-async-errors');
const cors = require("cors");


// Configurations
const PORT = process.env.PORT || 8080;
const HOST  =process.env.HOST || 'localhost';
const MODE = process.env.MODE || 'production';


// Connect to DB
require('./config/connectDB')()


// Middlewares 
// Parse JSON 
// Parse JSON bodies (up to 50 megabytes)
 app.use(express.json({ limit: '50mb' }));

// Enable CORS
app.use(cors({
    credentials: true,
 }))


// // App Routes
 app.use('/api/battery', require('./routes/battery'))
 app.use('/api/batteryInMongoDB', require('./routes/batterInMongoDB'))


// Run server 
app.listen(PORT, console.log(`Server running in ${MODE} mode on http://${HOST}:${PORT}`))



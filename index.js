// server.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const routes = require('./route.index');
const cors = require('cors');
const app = express();

app.use(cors());
dotenv.config();

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Database connected and server is running on port 3000...');
  });
});



app.use(express.json());

app.use("/v1",routes)
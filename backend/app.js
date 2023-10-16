require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors")

const rocketsPath = require('./routes/rocketRoute');
const searchPath = require('./routes/searchRoute');


app.use(cors());
app.use('/api/v1', rocketsPath);
app.use('/public', searchPath);

app.listen(PORT, () => console.log(`API ONLINE ${PORT}`))
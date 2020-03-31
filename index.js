const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// process.env.NODE_ENV = “production”;

//Connect to database
connectDB();
// Render frontend
const frontend = path.join(__dirname, './public');
app.use(express.static(frontend));

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

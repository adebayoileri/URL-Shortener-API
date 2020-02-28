const express = require('express');
const connectDB = require('./config/db');

const app = express();

// process.env.NODE_ENV = “production”;

//Connect to database
connectDB();
app.use(express.static('public'));

app.use(express.json({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

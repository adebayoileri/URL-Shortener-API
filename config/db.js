const mongoose = require('mongoose');
const config = require('config');
// const db = process.env.DB_URL
const db = config.get('DB_URL');

const connectDB = async ()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message)
        process.exit(1);
    }
}
module.exports = connectDB;

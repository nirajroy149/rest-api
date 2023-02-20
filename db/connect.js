// getting-started.js
require('dotenv').config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const uri = process.env.MONGODB_URL;

const connectDB = async () =>{
    return await mongoose.connect(uri).then(() => {
        console.log("Database is connected");
    }).catch(()=>{"error occured connecting database"});
}
module.exports = connectDB;
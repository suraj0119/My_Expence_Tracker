const mongoose = require("mongoose");
require('dotenv').config()
const db = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected SuccessFully....!!'); 
    }
    catch(error){
        console.log('DB Connection Error....', error);
    }
}

module.exports = {db};
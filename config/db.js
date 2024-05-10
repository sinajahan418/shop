const mongoose = require("mongoose")


async function connectDB(){
    try{
        if (mongoose.connections[0].readyState) {
            return true
        }else{
            await mongoose.connect(process.env.MONGODB_URI)
            console.log("connect to mongodb successfuly");
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB
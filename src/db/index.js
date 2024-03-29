const mongoose=require("mongoose")

const {DB_NAME}=require("../constants")
const connectDB=async()=>{
    try {
      const connection_instance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
      console.log(`\n MongoDB connected !!  DB HOST ${connection_instance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error ",error.message);
        process.exit(1)
    }
}
module.exports={connectDB}
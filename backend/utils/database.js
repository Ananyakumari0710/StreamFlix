import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})

const databaseConnection = async () => {
   
   try {
      const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}`);
       
    console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host}`);
     } 
      
     catch (error) {
      
        console.log("MONGODB connection error ",error);
         process.exit(1);
     }

};
export default databaseConnection;

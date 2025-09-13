
import mongoose from "mongoose";

export const connectDB= async()=>{
  await mongoose.connect(`${process.env.MONGO_URI}/TaskFlow`)
  .then(()=>console.log("DB CONNECTED"));
}

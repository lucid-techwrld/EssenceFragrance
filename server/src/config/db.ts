import mongoose from "mongoose"

const connectDB = async()=> {
    try{
        await mongoose.connect(process.env.DATABASE_URL as string)
        console.log("======Database Connected======")
    } catch(err) {
        console.log("=====Unable to connect to database=====", err)
        process.exit(1)
    }
};

export default connectDB;

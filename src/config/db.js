import mongoose from "mongoose";

const DB_NAME = 'chatdb'

export const connectDB = async () => {
    try {
        const response = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // const response = await mongoose.connect(`${process.env.MONGODB_LOCAL_URI}/${DB_NAME}`);
        console.log("MongoDB conntected!");
    } catch (error) {
        console.log("MongoDB Connectino Errro: ", error);
        process.exit(1);
    }
}
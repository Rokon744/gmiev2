import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://josimpost:josimpassword@cluster0.oylbu.mongodb.net/josimposts")
};

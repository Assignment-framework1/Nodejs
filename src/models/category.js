import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: String,
    description: String
});

export default mongoose.model("Category", Category);

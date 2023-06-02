import mongoose from "mongoose";

const { Schema } = mongoose

const Users = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword:{
        type: String
    }
})

export default mongoose.model("users", Users)


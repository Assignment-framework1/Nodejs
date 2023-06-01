import mongoose from "mongoose";

const { Schema } = mongoose

const Users = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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


import mongoose from "mongoose";
const { Schema } = mongoose


const Checkout = new Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    card_id: {
        type: mongoose.Types.ObjectId,
        ref: "Cart",
    },
    address: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    status: String
},
    { timestamps: true, versionKey: false }
)

export default mongoose.model("Checkout", Checkout)

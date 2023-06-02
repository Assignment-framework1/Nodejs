import mongoose from "mongoose";
const { Schema } = mongoose


const Product = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    origin_price: Number,
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    size: {
        type: [String],
        require: true
    },
    category_id: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    status: String
})

export default mongoose.model("Product", Product)

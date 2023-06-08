import mongoose from "mongoose";
const { Schema } = mongoose

const Size = new Schema({
    _id: String,
    name: {
        type: String,
        require: true
    },
    description: String,
    __v: Number,
})

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
        type: [Size],
        require: true
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    brand: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    status: Boolean
},
    { timestamps: true, versionKey: false }
)

export default mongoose.model("Product", Product)

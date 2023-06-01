import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: String,
        products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
        description: String
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);

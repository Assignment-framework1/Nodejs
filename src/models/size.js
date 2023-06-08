import mongoose from "mongoose";
const { Schema } = mongoose

const Size = new Schema({
    name: {
        type: String,
        require: true
    },
    description: String
},
    { versionKey: false }
)

export default mongoose.model("Size", Size)

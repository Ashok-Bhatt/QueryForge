import mongoose from "mongoose";

const QnaSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        maxLength: 100,
    },
    description : {
        type: String,
        require: true,
        trim: true,
        maxLength: 10000
    },
    uniqueCode : {
        type: String,
        require: true,
        trim: true,
    },
}, {
    timestamps: true,
})

const qnas = mongoose.model("Qna", QnaSchema);

export default qnas;
import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    description: String,
    price: Number,
    image: String
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema);

export default Book;
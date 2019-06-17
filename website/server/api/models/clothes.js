import mongoose from 'mongoose';

const clothesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sizes: [String],
    colors: [String],
    price: Number,
    name: String,
    brand: String,
    description: String,
    quantity: Number,
    img: [String],
    dateAdd: Date,
    rating: Number,
    ofArrayComment: [{"username": String,"date": Date, "title":String,"content": String, "rating":Number}],
    ofArrayCategory: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

export default mongoose.model('Clothes', clothesSchema);
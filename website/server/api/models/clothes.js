import mongoose from 'mongoose';

const clothesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    size: String,
    price: Number,
    name: String,
    brand: String,
    detail: String,
    quantity: Number,
    img: [String],
    kind: String,
    ofArrayComment: [{"username": String,"date": Date, "title":String,"content": String, "rating":Number}],
    ofArrayCategory: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

export default mongoose.model('Clothes', clothesSchema);
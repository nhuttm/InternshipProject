import mongoose from 'mongoose';

const clothesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    size: String,
    price: Number,
    name: String,
    brand: String,
    img: String,
    kind: String,
    ofArrayCategory: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

export default mongoose.model('Clothes', clothesSchema);
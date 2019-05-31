import mongoose from 'mongoose';

const clothesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    size: String,
    price: Number,
    name: String,
    brand: String
});

export default mongoose.model('Clothes', clothesSchema);
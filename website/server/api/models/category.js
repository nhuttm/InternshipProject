import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    ofArrayProduct: [{type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}]
})

export default mongoose.model('Category', categorySchema);
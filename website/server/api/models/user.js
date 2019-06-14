import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    fullname: String,
    role: Number
});

export default mongoose.model('User', userSchema);
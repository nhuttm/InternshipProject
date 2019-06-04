import mongoose from 'mongoose';

const Category = mongoose.model('Category')

export default class categoryController {
    listAllCategories = async (req, res) => {
        try{
            const result = await Category.find();
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(500).send({err});
        }
    }
}
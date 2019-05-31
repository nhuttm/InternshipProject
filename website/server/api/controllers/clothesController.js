import mongoose from 'mongoose';

const Clothes = mongoose.model('Clothes')

export default class clothesController {
    listAllClothes = async (req, res) => {
        try{
            const result = await Clothes.find();
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(500).send({err});
        }
    }
}
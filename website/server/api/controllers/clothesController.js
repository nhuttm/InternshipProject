import mongoose from 'mongoose';
import { PAGE_LIMIT } from '../constant';

const Clothes = mongoose.model('Clothes')

export default class clothesController {
    listAllClothes = async (req, res) => {
        try{
            const pageNumber = req.query.pageNumber || 1;
            console.log(pageNumber);
            const offSet = (pageNumber - 1) * PAGE_LIMIT;
            let result = await Clothes.find();
            const totalPages = Math.ceil(result.length / PAGE_LIMIT);
            result = result.slice(offSet, offSet + PAGE_LIMIT);
            let response = {"clothes": result, "pageNumber": pageNumber, "totalPages": totalPages};
            res.json(response);
        } catch (err) {
            console.log(err);
            res.status(500).send({err});
        }
    }
}
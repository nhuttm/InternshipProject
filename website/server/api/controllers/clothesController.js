import mongoose from 'mongoose';
import { PAGE_LIMIT, PAGE_LIMIT_ADMIN } from '../constant';

const Clothes = mongoose.model('Clothes')

export default class clothesController {
    listAllClothes = async (req, res) => {
        try{
            const pageNumber = parseInt(req.query.pageNumber) || 1;
            const pageLimit = parseInt(req.query.pageLimit) || PAGE_LIMIT;

            const offSet = (pageNumber - 1) * pageLimit;
            let result = await Clothes.find();
            const totalPages = Math.ceil(result.length / pageLimit);
            result = result.slice(offSet, offSet + pageLimit);
            let response = {"clothes": result, "pageNumber": pageNumber, "totalPages": totalPages};
            res.json(response);
        } catch (err) {
            console.log(err);
            res.status(500).send({err});
        }
    }

    listAllClothesAdmin = async (req, res) => {
        try{
            const pageNumber = parseInt(req.query.pageNumber) || 1;
            const pageLimit =  parseInt(req.query.pageLimit) || PAGE_LIMIT_ADMIN;

            const offSet = (pageNumber - 1) * pageLimit;
            let result = await Clothes.find().populate('ofArrayCategory', 'name');
            let totalEntry = result.length;

            const totalPages = Math.ceil(totalEntry / pageLimit);
            result = result.slice(offSet, offSet + pageLimit);
            
            let response = {"clothes": result, "pageNumber": pageNumber, "pageLimit": pageLimit ,"totalPages": totalPages, "totalEntry": totalEntry};
            res.json(response);
        } catch (err) {
            console.log(err);
            res.status(500).send({err});
        }
    }

    getClothesWithId = async (req,res) => {
        try{
            const id = req.params.id;
            const result = await Clothes.findOne({"_id": id});
            let response = {"clothes": result};
            res.json(response);
        } catch (err){
            console.log(err);
            res.status(500).send({err});
        }
    }

    removeClothesWithId = async (req,res) => {
        try{
            const id = req.params.id;
            await Clothes.deleteOne({"_id": id});
            let response = {"message": "remove success"};
            res.status(200).json(response);
        } catch (err){
            console.log(err);
            res.status(500).send({err});
        }
    }
}
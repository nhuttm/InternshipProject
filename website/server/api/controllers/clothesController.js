import mongoose from 'mongoose';
import { PAGE_LIMIT, PAGE_LIMIT_ADMIN } from '../constant';
import { upload } from '../middleware';

const Clothes = mongoose.model('Clothes')
const Category = mongoose.model('Category');

export default class clothesController {
    
    getPageValueFromQuery = pageValue => {
        let num = parseInt(pageValue);
        return num > 0 && num; 
    }

    listAllClothes = async (req, res) => {
        try{
            const pageNumber = this.getPageValueFromQuery(req.query.pageNumber) || 1;
            const pageLimit = this.getPageValueFromQuery(req.query.pageLimit) || PAGE_LIMIT;

            const category = req.query.category || 'all';

            const offSet = (pageNumber - 1) * pageLimit;
            let result = null;
            let response = null;
            let totalPages = 0;
            if (category === 'all'){
                result = await Clothes.find();
            } else {
                result = await Category.findOne({'_id': category}).populate('ofArrayProduct');
                result = [...result.ofArrayProduct];
            }
            totalPages = Math.ceil(result.length / pageLimit);
            result = result.slice(offSet, offSet + pageLimit);
            response = {"clothes": result, "pageNumber": pageNumber, "totalPages": totalPages};
            res.status(200).json(response);
        } catch (err) {
            res.status(500).send({err});
        }
    }

    listAllClothesAdmin = async (req, res) => {
        try{
            const pageNumber = this.getPageValueFromQuery(req.query.pageNumber) || 1;
            const pageLimit =  this.getPageValueFromQuery(req.query.pageLimit) || PAGE_LIMIT_ADMIN;

            const offSet = (pageNumber - 1) * pageLimit;
            let result = await Clothes.find().populate('ofArrayCategory', 'name');
            let totalEntry = result.length;

            const totalPages = Math.ceil(totalEntry / pageLimit);
            result = result.slice(offSet, offSet + pageLimit);
            
            let response = {"clothes": result, "pageNumber": pageNumber, "pageLimit": pageLimit ,"totalPages": totalPages, "totalEntry": totalEntry};
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).send({err});
        }
    }

    getClothesWithId = async (req,res) => {
        try{
            const id = req.params.id;
            const result = await Clothes.findOne({"_id": id}).populate('ofArrayCategory');
            let response = {"clothes": result};
            res.status(200).json(response);
        } catch (err){
            console.log(err);
            res.status(500).send({err});
        }
    }

    addProductIntoDB = (req, res) => {
        upload(req, res, async (err) => {
            try{
                let imgArray = [];
                if (req.files){
                    for (let index = 0; index < req.files.length; index++) {
                        const element = req.files[index];
                        imgArray.push('/public/img/' + element.filename);
                    }
                }
                let categories = [];
                let categoriesQuery = await Category.find({'_id': {
                        $in: req.body.categories            
                    }
                });
                for (let index = 0; index < categoriesQuery.length; index++) {
                    const element = categoriesQuery[index]._id;
                    categories.push(element);
                }
                let clothes = new Clothes({
                    _id: mongoose.Types.ObjectId(),
                    sizes: req.body.sizes,
                    colors: req.body.colors,
                    price: req.body.price,
                    name: req.body.name,
                    brand: req.body.brand,
                    description: req.body.description,
                    quantity: req.body.quantity,
                    img: imgArray,
                    dateAdd: new Date(),
                    rating: 4,
                    ofArrayCategory: categories,
                    ofArrayComment: []
                })
                await clothes.save();
                //push product into category
                for (let index = 0; index < categoriesQuery.length; index++) {
                    let newArrayProduct = [...categoriesQuery[index].ofArrayProduct];
                    newArrayProduct.push(clothes);
                    categoriesQuery[index].ofArrayProduct = [...newArrayProduct];
                    await categoriesQuery[index].save();
                }
                res.status(200).json({"message": "add product success", 'cloth': clothes});
            } catch (err){
                console.log(err);
                res.status(500).send({err});
            }
        })
    }

    editProductDB = (req, res) => {
        upload(req, res, async (err) => {
            try{
                let cloth = await Clothes.findOne({'_id': req.body.id}).populate('ofArrayCategory');
                //remove product from old category
                for (let index = 0; index < cloth.ofArrayCategory.length; index++) {
                    let oldCategories = cloth.ofArrayCategory[index];
                    let newArrayProduct = [...oldCategories.ofArrayProduct];
                    let indexRemove = newArrayProduct.indexOf(cloth._id);
                    newArrayProduct.splice(indexRemove, 1);
                    oldCategories.ofArrayProduct = [...newArrayProduct];
                    await oldCategories.save();
                }

                let imgArray = [...cloth.img];
                if (req.files){
                for (let index = 0; index < req.files.length; index++) {
                    const element = req.files[index];
                    imgArray[index] = '/public/img/' + element.filename;
                }
            }
                let categories = [];
                let categoriesQuery = await Category.find({'_id': {
                        $in: req.body.categories            
                    }
                });
                for (let index = 0; index < categoriesQuery.length; index++) {
                    const element = categoriesQuery[index]._id;
                    categories.push(element);
                }
                cloth.sizes = req.body.sizes;
                cloth.colors = req.body.colors;
                cloth.price = req.body.price;
                cloth.name = req.body.name;
                cloth.brand = req.body.brand;
                cloth.description = req.body.description;
                cloth.quantity = req.body.quantity;
                cloth.img = imgArray;
                cloth.dateAdd = new Date();
                cloth.ofArrayCategory = categories;

                await cloth.save();
                //push product into category
                for (let index = 0; index < categoriesQuery.length; index++) {
                    let newArrayProduct = [...categoriesQuery[index].ofArrayProduct];
                    newArrayProduct.push(cloth._id);
                    categoriesQuery[index].ofArrayProduct = [...newArrayProduct];
                    await categoriesQuery[index].save();
                }
                res.status(200).json({"message": "edit product success", 'cloth': cloth});
            } catch (err){
                console.log(err);
                res.status(500).send({err});
            }
        })
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
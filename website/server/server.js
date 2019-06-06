import express from 'express'; //return functions reference

import mongoose from 'mongoose';

import cors from 'cors';
import * as Types from './api/constant';

import './api/models/clothes';
import './api/models/category';

import clothesRouter from './api/routers/clothesRouter';
import categoryRouter from './api/routers/categoryRouter';

let app = express(); //instance of express
app.use(cors());

mongoose.connect('mongodb://localhost:27017/local');

const Clothes = mongoose.model('Clothes');
const Category = mongoose.model('Category');

app.use(express.static(__dirname + '/public'));

app.use('/api/clothes', clothesRouter);
app.use('/api/category', categoryRouter);

app.get('/createData', (req, res) => {
    console.log('run');
    // Clothes.find()
    // .then(clothes => {
    //     for (let index = 0; index < clothes.length - 20; index++) {
    //         clothes[index].kind = Types.BOY;
    //         clothes[index].save();        
    //     }
    //     for (let index = clothes.length - 20; index < clothes.length; index++) {
    //         clothes[index].kind = Types.LADIE;          
    //         clothes[index].save();        
    //     }

    // });
    const category = new Category({
        _id: mongoose.Types.ObjectId(),
        name: 'Maxi / Midi dresses'
    });
    category.save();
    // Category.findOne({'name': 'Casual dresses'})
    // .then(cate => {
    //     console.log(cate);
    //     const clothes = new Clothes({
    //         _id: mongoose.Types.ObjectId(),
    //         size: 'S',
    //         price: 300000,
    //         name: 'Collete Stretch Linen Minidress',
    //         brand: 'imk',
    //         img: '/img/boy.jpg',
    //         ofArrayCategory: [cate._id]
    //     });
        
    //     cate.ofArrayProduct.push(clothes._id);
    //     cate.save();

    
    //     clothes.save()
    //     .then( ()=> {
    //         console.log('success');
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });   
    //     res.send('create data');
    // });
});

// set server port
app.set('port', process.env.PORT || 2000);


// start server
app.listen(app.get('port'), () => {
    console.log('server is  listening on port ' + app.get('port'));
});

import express from 'express'; //return functions reference
import bcrypt from 'bcrypt';

import mongoose from 'mongoose';

import cors from 'cors';
import bodyParser from 'body-parser';
import faker from 'faker';

import * as Types from './api/constant';

import './api/models/clothes';
import './api/models/category';
import './api/models/user';
import './api/passport';

import clothesRouter from './api/routers/clothesRouter';
import categoryRouter from './api/routers/categoryRouter';
import userRouter from './api/routers/userRouter';
import adminRouter from './api/routers/adminRouter';
import multer from 'multer';

import passport from 'passport';

let app = express(); //instance of express
app.use(cors());
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());

mongoose.connect('mongodb://localhost:27017/local');

const Clothes = mongoose.model('Clothes');
const Category = mongoose.model('Category');
const User = mongoose.model('User');

app.use('/api/clothes', clothesRouter);
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);

app.get('/createData', async (req, res) => {

    // let hashPass = await bcrypt.hash('1', Types.SALT);
    // let user1 = new User({
    //     _id: mongoose.Types.ObjectId(),
    //     username: 'admin',
    //     password: hashPass,
    //     role: Types.IS_ADMIN,
    //     fullname: 'ADMIN SIMA',
    //     img: faker.image.avatar()
    // });


    // let user2 = new User({
    //     _id: mongoose.Types.ObjectId(),
    //     username: 'user',
    //     password: hashPass,
    //     role: Types.IS_USER,
    //     fullname: 'USER SIMA',
    //     img: faker.image.avatar()
    // });

    // await user1.save();
    // await user2.save();

    const size = ['S','M','L'];
    const color = [Types.RED, Types.BLUE, Types.CHARCOAL_GREY, Types.PALE_ORANGE, Types.WHITE_THREE, Types.YELLOW];
    const img = ['/public/img/boy.jpg','/public/img/girl.jpg','/public/img/girl_child.jpg']
    let uuid = await Category.find();

    for (let index = 0; index < 100; index++) {
        let sizes = [];
        let colors = [];
        let imageUrl = [];
        let categories = [];
        let comments = [];
        let categoriesKeeper = [];
        for (let x = 0; x < 2; x++) {
            let size_tmp = size[Math.floor(Math.random()*3)];
            sizes.push(size_tmp);
        }
        for (let x = 0; x < 3; x++) {
            let color_tmp = color[Math.floor(Math.random()*6)];
            colors.push(color_tmp);
        }
        for (let x = 0; x < 4; x++) {
            let img_tmp = img[Math.floor(Math.random()*3)];
            imageUrl.push(img_tmp);
        }
        for (let x = 0; x < 2; x++) {
            let cate = uuid[Math.floor(Math.random() * 5)];
            categories.push(cate._id);
            categoriesKeeper.push(cate);
        }
        for (let x = 0; x < 10; x++) {
            let comment = {
                "username": faker.name.findName(),
                "date": faker.date.future(),
                "title": faker.lorem.lines(),
                "content": faker.lorem.paragraph(),
                "rating": Math.floor(Math.random() * 5 + 1)
            }
            comments.push(comment);
        }
        const clothes = new Clothes({
            _id: mongoose.Types.ObjectId(),
            sizes: sizes,
            price: faker.random.number(),
            name: faker.lorem.lines(),
            colors: colors,
            brand: faker.lorem.lines(),
            description: faker.lorem.paragraph(),
            quantity: faker.random.number(),
            img: imageUrl,
            rating: Math.floor(Math.random()*5+1),
            dateAdd: new Date(),
            ofArrayComment: comments,
            ofArrayCategory: categories
        });
        await clothes.save();

        for (let index = 0; index < categoriesKeeper.length; index++) {
            const element = categoriesKeeper[index];
            let tmp_array = [...element.ofArrayProduct];
            tmp_array.push(clothes._id);
            element.ofArrayProduct = [...tmp_array];
            await element.save();
        }
    }


    res.send('success');
});

// set server port
app.set('port', process.env.PORT || 2000);


// start server
app.listen(app.get('port'), () => {
    console.log('server is  listening on port ' + app.get('port'));
});

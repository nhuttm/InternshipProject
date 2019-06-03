import express from 'express'; //return functions reference

import mongoose from 'mongoose';

import cors from 'cors';

import './api/models/clothes';

import clothesRouter from './api/routers/clothesRouter';

let app = express(); //instance of express
app.use(cors());

mongoose.connect('mongodb://localhost:27017/local');

const Clothes = mongoose.model('Clothes');

app.use(express.static(__dirname + '/public'));

app.use('/api/clothes', clothesRouter);

app.get('/createData', (req, res) => {
    console.log('run');
    const clothes = new Clothes({
        _id: mongoose.Types.ObjectId(),
        size: 'XLXS',
        price: 300000,
        name: 'Collete Stretch Linen Minidress',
        brand: 'imk',
        img: '/img/girl_child.jpg'
    });

    clothes.save()
    .then( ()=> {
        console.log('success');
    })
    .catch(err => {
        console.log(err);
    });   
    res.send('create data');
});

// set server port
app.set('port', process.env.PORT || 2000);


// start server
app.listen(app.get('port'), () => {
    console.log('server is  listening on port ' + app.get('port'));
});

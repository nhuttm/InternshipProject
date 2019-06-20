process.env.NODE_ENV = 'test';


import mongoose from 'mongoose';
import Clothes from '../api/models/clothes';
import Category from '../api/models/category';
import User from '../api/models/user';
import faker from 'faker';
import chai from 'chai';
import server from '../server';

import { spy, stub } from 'sinon'
import { mockReq, mockRes } from 'sinon-express-mock'
import * as middleware from '../api/middleware';
import clothesController from '../api/controllers/clothesController';
let clothesControllerInstance = new clothesController;
mongoose.connect('mongodb://localhost:27017/test');

let expect = chai.expect;

let testEditVariable = null;
let testFindVariable = null;
let testRemoveVariable = null;

let customStub = null;
let createMockResponse  = function(dataExpect, statusExpect){
    let response = {
        send: function(){},
        json: dataExpect,
        status: function(responseStatus) {
            expect(responseStatus).to.be.equal(statusExpect);
            return this; 
        }
    }
    return mockRes(response);
}

let createMockRequest = function(body, params){
    const request = {body, params};
    return mockReq(request)
}

describe('Clothes', () => {
    beforeEach(async () => {
        customStub = stub(middleware, 'upload').callsFake(function(req,res,next){
            next();
        })
        let clothesArray = [];
            for (let index = 0; index < 100; index++) {
                let sizes = [];
                let colors = [];
                let imageUrl = [];
                let categories = [];
                let comments = [];
                const clothes = new mongoose.model('Clothes')({
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
                clothesArray.push(clothes);
            }
            testEditVariable = clothesArray[90]._id;
            testFindVariable = clothesArray[98]._id;
            testRemoveVariable = clothesArray[97]._id;
    })

    describe('Page value in query string', () => {
        it('Receive false if page value is string', () => {
            let result = clothesControllerInstance.getPageValueFromQuery('test');
            expect(result).to.be.false;
        }),
        it('Receive false if page value is negative value', () => {
            let result = clothesControllerInstance.getPageValueFromQuery(-1);
            expect(result).to.be.false;
        })
    })

    describe('Get all clothes in db', () => {
        it('Receive 100 products in db', () => {
            let body = {
                pageNumber: 1,
                category: 'all'
            };
            let dataExpect = function(json){
                expect(json.totalEntry).to.be.equal(100);
            }

            const req = createMockRequest(body, null);
            const res = createMockResponse(dataExpect, 200);
            clothesControllerInstance.listAllClothesAdmin(req, res);
        })
    })

    describe('CRUD clothes with id', () => {
        it('Edit product into db', () => {
            let body = {
                id: testEditVariable,
                sizes: [],
                colors: [],
                price: 1000,
                name: 'test',
                brand: 'test',
                description: 'test',
                quantity: 100,
            };
            let dataExpect = function(json){
                let newCloth = json.cloth;
                console.log(newCloth);
                let params = {
                    id: newCloth._id
                };
                let dataExpect = function(json){
                    expect(json.clothes).to.be.equal(newCloth);
                }
                const req = createMockRequest(null, params);
                const res = createMockResponse(dataExpect, 200);
                clothesControllerInstance.getClothesWithId(req, res);
            }
            const req = createMockRequest(body, null);
            const res = createMockResponse(dataExpect, 200);
            clothesControllerInstance.editProductDB(req, res);
        
        }),
        it('Get product in db if id correct', () => {
            let params = {
                id: testFindVariable,
            };
            let dataExpect = function(json){
                 expect(json.clothes).to.have.property('_id');

                  expect(String.toString(json.clothes._id)).to.be.equal(String.toString(testFindVariable));
            }
            const req = createMockRequest(null, params);
            const res = createMockResponse(dataExpect, 200);
            clothesControllerInstance.getClothesWithId(req, res);
        }),
        it('Remove product in db if id correct', () => {
            let params = {
                id: testRemoveVariable,
            };
            let dataExpect = function(json){
                let params = {
                    id: testRemoveVariable,
                };
                let dataExpect = function(json){
                    expect(json.clothes).to.be.null;
                }
                const req = createMockRequest(null, params);
                const res = createMockResponse(dataExpect, 200);
                clothesControllerInstance.getClothesWithId(req, res);
            }
            const req = createMockRequest(null, params);
            const res = createMockResponse(dataExpect, 200);
            clothesControllerInstance.removeClothesWithId(req, res);
        }),
        it('Add product into db', () => {
            let body = {
                sizes: [],
                colors: [],
                price: 1000,
                name: 'test',
                brand: 'test',
                description: 'test',
                quantity: 100,
            };
            let dataExpect = function(json){
                let testAddVariable = json.cloth._id;
                let params = {
                    id: testAddVariable
                };
                let dataExpect = function(json){
                    expect(json.clothes).to.have.property('_id');
                    expect(String.toString(json.clothes._id)).to.be.equal(String.toString(testAddVariable));
                }
                const req = createMockRequest(null, params);
                const res = createMockResponse(dataExpect, 200);
                clothesControllerInstance.getClothesWithId(req, res);
            }
            const req = createMockRequest(body, null);
            const res = createMockResponse(dataExpect, 200);
            clothesControllerInstance.addProductIntoDB(req, res);
        
        })
        
    })

    afterEach(async () => {
        middleware.upload.restore();
        mongoose.model('Clothes').deleteMany().exec();
    })
})
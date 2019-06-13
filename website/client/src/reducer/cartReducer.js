import * as Types from '../constant/constant';

let initialState = {numberProduct: 0, productList: []};

const cartReducer = (state = initialState, action ) => {
    switch (action.type){
        case Types.ADD_PRODUCT_INTO_CART: {
            let product = action.payload.product;
            let config = action.payload.config;
            let productList = [...state.productList];
            productList.push({
                product,
                config
            });
            state = {...state, numberProduct: productList.length, productList: [...productList]}
            return state;
        }
        default:
            return state;
    }
}

export default cartReducer;
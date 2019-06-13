import * as Types from '../constant/constant';

let initialState = JSON.parse(localStorage.getItem('productCart')) || {numberProduct: 0, total: 0, productList: []};

const cartReducer = (state = initialState, action ) => {
    switch (action.type){
        case Types.ADD_PRODUCT_INTO_CART: {
            let product = action.payload.product;
            let config = action.payload.config;
            let total = state.total + product.price * config.quantity;
            let productList = [...state.productList];
            productList.push({
                product,
                config
            });
            state = {...state, numberProduct: productList.length, total ,productList: [...productList]}
            localStorage.setItem('productCart', JSON.stringify(state));
            return state;
        }
        default:
            return state;
    }
}

export default cartReducer;
import * as Types from '../constant/constant';

let initialState = JSON.parse(localStorage.getItem('productCart')) || {numberProduct: 0, total: 0, productList: []};

const cartReducer = (state = initialState, action ) => {
    console.log(action.type);
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
        case Types.INCREARE_QUANTITY_PRODUCT:
        case Types.DECREARE_QUANTITY_PRODUCT:{
            const index = action.payload.index;
            let productHandle = state.productList[index];
            let totalAfter = state.total;
            
            if (action.type == Types.INCREARE_QUANTITY_PRODUCT){
                productHandle.config.quantity++;
                totalAfter += productHandle.product.price;
            } else {
                productHandle.config.quantity--;
                totalAfter -= productHandle.product.price;
            }
           
            state = {...state, total: totalAfter, productList: [...state.productList.slice(0, index), productHandle, ...state.productList.slice(index+1, state.productList.length+1)]};
            localStorage.setItem('productCart', JSON.stringify(state));
            return state;
        }
        case Types.REMOVE_PRODUCT_IN_CART: {
            const index = action.payload.index;
            let productRemove = state.productList[index];
            let totalAfter = state.total;

            totalAfter -= productRemove.product.price * productRemove.config.quantity;

            state = {...state, total: totalAfter, productList: [...state.productList.slice(0, index), ...state.productList.slice(index+1, state.productList.length+1)]};
            localStorage.setItem('productCart', JSON.stringify(state));
            return state;
        }
        default:
            return state;
    }
}

export default cartReducer;
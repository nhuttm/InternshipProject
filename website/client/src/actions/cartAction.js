import * as Types from '../constant/constant.js'

export const addProductIntoCart = (product, config) => {
    return {
        type: Types.ADD_PRODUCT_INTO_CART,
        payload:{
            product,
            config
        }
    }
}

export const increaseQuantityProduct = (index) => {
    return {
        type: Types.INCREARE_QUANTITY_PRODUCT,
        payload: {
            index
        }
    }
}

export const decreaseQuantityProduct = (index) => {
    return {
        type: Types.DECREARE_QUANTITY_PRODUCT,
        payload: {
            index
        }
    }
}

export const removeProductInCart = (index) => {
    return {
        type: Types.REMOVE_PRODUCT_IN_CART,
        payload: {
            index
        }
    }
}
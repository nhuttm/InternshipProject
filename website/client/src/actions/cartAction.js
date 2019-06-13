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
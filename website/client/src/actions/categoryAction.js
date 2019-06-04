import * as Types from '../constant/constant.js'
import axiosInstance from '../instances/axiosInstance';

export const getAllCategoriesRequest = () => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.get('/category');
            dispatch(getAllCategories(response.data));
        } catch (error) {
            console.log(error); 
        }
    }
}

export const getAllCategories = (categories) => {
    return {
        type: Types.GET_ALL_CATEGORIES,
        payload:{
            categories
        }
    }
}
import * as Types from '../constant/constant.js'
import axiosInstance from '../instances/axiosInstance';

export const getAllClothesRequest = (pageNumber) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.get('/clothes?pageNumber=' + pageNumber);
            dispatch(getAllClothes(response.data.clothes, response.data.totalPages, response.data.pageNumber));
        } catch (error) {
            console.log(error); 
        }
    }
}

export const getAllClothes = (clothes, totalPages, pageNumber) => {
    return {
        type: Types.GET_ALL_CLOTHES,
        payload:{
            clothes,
            totalPages,
            pageNumber
        }
    }
}
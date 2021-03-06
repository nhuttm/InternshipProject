import * as Types from '../constant/constant.js'
import axiosInstance from '../instances/axiosInstance';

export const getAllClothesRequest = (pageNumber, category) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.get('/clothes?pageNumber=' + pageNumber + '&category=' + category);
            dispatch(getAllClothes(response.data.clothes, response.data.totalPages, response.data.pageNumber));
        } catch (error) {
            console.log(error); 
        }
    }
}

export const getClothesWithIdRequest = (id) => {
    return async (dispatch) => {
        try{
            const response = await axiosInstance.get('/clothes/' + id);
            dispatch(getClothesWithId(response.data.clothes));
        } catch (error){
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

export const getClothesWithId = (cloth) => {
    return {
        type: Types.GET_CLOTHES_WITH_ID,
        payload: {cloth}
    }
}
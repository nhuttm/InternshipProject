import * as Types from '../constant/constant.js'
import axiosInstance from '../instances/axiosInstance';

export const getAllClothesRequestAdmin = (pageNumber, pageLimit) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.get('/admin/clothes?pageNumber=' + pageNumber + '&pageLimit=' + pageLimit);
            dispatch(getAllClothesAdmin(response.data.clothes, response.data.totalPages, response.data.pageNumber, response.data.totalEntry, response.data.pageLimit));
        } catch (error) {
            console.log(error); 
        }
    }
}

export const getAllClothesAdmin = (clothes, totalPages, pageNumber, totalEntry, pageLimit) => {
    return {
        type: Types.GET_ALL_CLOTHES_ADMIN,
        payload:{
            clothes,
            totalPages,
            pageNumber,
            totalEntry,
            pageLimit
        }
    }
}
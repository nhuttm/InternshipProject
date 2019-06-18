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

export const removeClothesWithIdRequestAdmin = (id) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.delete('/admin/delete/clothes/' + id);
            dispatch(removeClothesWithIdAdmin(response.data.message));
        } catch (error) {
            console.log(error); 
        }
    }
}

export const addProductIntoDBRequest = (product) => {
    return async (dispatch) => {
        try{
            const response = await axiosInstance.post('/admin/clothes/add_product', product, {headers: {
                'content-type': 'multipart/form-data'
            }});
            dispatch(addProductIntoDB(response.data.message, response.data.cloth));
        } catch(error) {
            console.log(error);
        }
    }
}

export const setTitlePageAdmin = (title) => {
     return {
        type: Types.SET_TITLE_PAGE_ADMIN,
        payload:{
            title
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

export const removeClothesWithIdAdmin = (message) => {
    return {
        type: Types.REMOVE_CLOTHES_WITH_ID_ADMIN,
        payload: {
            message
        }
    }
}

export const addProductIntoDB = (message, cloth) => {
    return {
        type: Types.ADD_CLOTHES_INTO_DB_ADMIN,
        payload: {
            message,
            cloth
        }
    }
}
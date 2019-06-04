import * as Types from '../constant/constant.js'
import axiosInstance from '../instances/axiosInstance';

export const getAllClothesRequest = () => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.get('/clothes');
            dispatch(getAllClothes(response.data));
        } catch (error) {
            console.log(error); 
        }
    }
}

export const getAllClothes = (clothes) => {
    return {
        type: Types.GET_ALL_CLOTHES,
        payload:{
            clothes
        }
    }
}
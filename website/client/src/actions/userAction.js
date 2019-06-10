import * as Types from '../constant/constant';
import axiosInstance from '../instances/axiosInstance';

export const postLoginRequest = (email, password, fullname) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post('/user/login', {
                email,
                password,
                fullname
            });
            console.log(response);
            dispatch(postLogin(response));
        } catch(error){
            console.log(error);
        }
    }
}

export const postRegisterRequest = (email, password, fullname) => {
    return async dispatch => {
        try{
            const response = await axiosInstance.post('/user/register', {
                email,
                password,
                fullname
            });
            if (response.data.error){
                dispatch(postRegister(response.data.error));
            } else {
                dispatch(postRegister(response.data.result));
            }
        } catch (error){
            console.log(error);
        }
    }
}

export const postLogin = (token) => {
    return {
        type: Types.POST_LOGIN,
        payload:{
            token
        }
    }
}

export const postRegister = (message) => {
    return {
        type: Types.POST_REGISTER,
        payload:{
            message
        }
    }
}
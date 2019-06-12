import * as Types from '../constant/constant';
import axiosInstance from '../instances/axiosInstance';

export const postLoginRequest = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post('/user/login', {
                email,
                password
            });

            if (response.data.token){
                localStorage.setItem('user', response.data.avatar);
                localStorage.setItem('user_token', response.data.token);
            }

            dispatch(postLogin(response.data.avatar, response.data.message));
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

export const postLogin = (avatar, message) => {
    return {
        type: Types.POST_LOGIN,
        payload:{
            message,
            avatar
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

export const getUser = () => {
    return {
        type: Types.GET_USER
    }
}
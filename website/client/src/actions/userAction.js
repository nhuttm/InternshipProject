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
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('user_token', response.data.token);
            }

            dispatch(postLogin(response.data.user, response.data.message));
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

export const postLogin = (user, message) => {
    return {
        type: Types.POST_LOGIN,
        payload:{
            message,
            user
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
import * as Types from '../constant/constant';

let initialState = {avatar: localStorage.getItem('user'), message: ' '};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.POST_LOGIN:{
            return {...state, avatar: action.payload.avatar, message: action.payload.message};
        }
        case Types.POST_REGISTER: {
            return {...state, message: action.payload.message};
        }
        case Types.GET_USER: {
            return state;
        }
        default:
            return state;
    }
}

export default userReducer;
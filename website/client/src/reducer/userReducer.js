import * as Types from '../constant/constant';

let initialState = {user: JSON.parse(localStorage.getItem('user')), message: ' '};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.POST_LOGIN:{
            return {...state, user: action.payload.user, message: action.payload.message};
        }
        case Types.POST_REGISTER: {
            return {...state, message: action.payload.message};
        }
        default:
            return state;
    }
}

export default userReducer;
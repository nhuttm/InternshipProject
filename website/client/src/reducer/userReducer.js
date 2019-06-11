import * as Types from '../constant/constant';

let initialState = {user: JSON.parse(localStorage.getItem('user')), message: ' '};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.POST_LOGIN:{
            console.log('login post');
            console.log(JSON.parse(localStorage.getItem('user')));
            return {...state, message: action.payload.message};
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
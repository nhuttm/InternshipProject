import * as Types from '../constant/constant';

let initialState = {clothes: []};

const clothesReducer = (state = initialState, action ) => {
    switch (action.type){
        case Types.GET_ALL_CLOTHES: {
            return {...state, clothes: action.payload.clothes};
        }

        default:
            return state;
    }
}

export default clothesReducer;
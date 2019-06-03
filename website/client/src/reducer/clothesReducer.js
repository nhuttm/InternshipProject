import * as Types from '../constant/constant';

let initialState = {clothes: []};

const clothesReducer = (state = initialState, action ) => {
    console.log('run reducer');
    switch (action.type){
        case Types.GET_ALL_CLOTHES: {
            return action.payload.clothes;
        }

        default:
            return state.clothes;
    }
}

export default clothesReducer;
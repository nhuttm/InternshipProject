import * as Types from '../constant/constant';

let initialState = {clothes: [], totalPages: 0, pageNumber: 1};

const clothesReducer = (state = initialState, action ) => {
    switch (action.type){
        case Types.GET_ALL_CLOTHES: {
            console.log('action' + action.payload.totalPages);
            return {...state, clothes: action.payload.clothes, totalPages: action.payload.totalPages, pageNumber: action.payload.pageNumber};
        }

        default:
            return state;
    }
}

export default clothesReducer;
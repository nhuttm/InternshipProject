import * as Types from '../constant/constant';

let initialState = {clothes: [], cloth: null, totalPages: 0, pageNumber: 1};

const clothesReducer = (state = initialState, action ) => {
    switch (action.type){
        case Types.GET_ALL_CLOTHES: {
            return {...state, clothes: action.payload.clothes, totalPages: action.payload.totalPages, pageNumber: action.payload.pageNumber};
        }
        case Types.GET_CLOTHES_WITH_ID: {
            return {...state, cloth: action.payload.cloth};
        }
        default:
            return state;
    }
}

export default clothesReducer;
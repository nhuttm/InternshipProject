import * as Types from '../constant/constant';

let initialState = {clothes: [], totalEntry: 0, totalPages: 0, pageNumber: 1, pageLimit: 10, message: '', titlePage: 'Products'};

const adminReducer = (state = initialState, action ) => {
    switch (action.type){
        case Types.GET_ALL_CLOTHES_ADMIN: {
            return {...state, clothes: action.payload.clothes, totalEntry: action.payload.totalEntry, pageLimit: action.payload.pageLimit, totalPages: action.payload.totalPages, pageNumber: action.payload.pageNumber};
        }

        case Types.REMOVE_CLOTHES_WITH_ID_ADMIN: {
            return {...state, message: action.payload.message};
        }

        case Types.SET_TITLE_PAGE_ADMIN: {
            state = {...state, titlePage: action.payload.title};
            return state;
        }

        case Types.ADD_CLOTHES_INTO_DB_ADMIN: {
            return {...state, message: action.payload.message};
        }
        default:
            return state;
    }
}

export default adminReducer;
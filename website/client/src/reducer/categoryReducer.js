import * as Types from '../constant/constant';

let initialState = {categories: []};

const categoriesReducer = (state = initialState, action ) => {
    switch (action.type){
        case Types.GET_ALL_CATEGORIES: {
            return {...state, categories: action.payload.categories};
        }

        default:
            return state;
    }
}

export default categoriesReducer;
import * as Types from '../constant/constant';

let initialState = {categories: []};

const categoriesReducer = (state = initialState, action ) => {
    console.log(action.type);
    switch (action.type){
        case Types.GET_ALL_CATEGORIES: {
            return {...state, categories: action.payload.categories};
        }

        default:
            return state;
    }
}

export default categoriesReducer;
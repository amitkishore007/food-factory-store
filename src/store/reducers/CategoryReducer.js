import { CATEGORIES } from "../../dummy-data/dummy-data";
import { LOAD_CATEGORIES } from '../actions/CategoryActions';

const initialState = {
    categories: CATEGORIES
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload]
            }
        break;

        default: 
            return state;
    }
};


export default reducer;
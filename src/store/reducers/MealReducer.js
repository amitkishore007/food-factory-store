import { MEALS } from '../../dummy-data/dummy-data';

const initialState = {
    meals: [...MEALS],
    favoriteMeals: [],
    filteredMeals: []
};

const reducer = (state = initialState, action) => {

   return state;
}

export default reducer;
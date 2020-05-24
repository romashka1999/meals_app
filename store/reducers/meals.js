import { MEALS } from '../../data/dummyData';

import { TOGGLE_FAVORIE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORIE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if(existingIndex >=0) {
                const updatedFavoriteMeals = [...state.favoriteMeals];
                updatedFavoriteMeals.splice(existingIndex, 1);
                return {...state, favoriteMeals:updatedFavoriteMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: updatedFilteredMeals}
        default:
            return state;
    }
}

export default mealsReducer;
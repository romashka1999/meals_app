import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummyData';


const FavoritesScreen = ({ navigation }) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList 
                displayedData={favMeals}
                navigation={navigation}/>
}

 
export default FavoritesScreen;
import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummyData';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation}) => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const categoryId = navigation.getParam('categoryId');
    const diplayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId)!==-1);
    return <MealList 
                displayedData={diplayedMeals}
                navigation={navigation}/>
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const { navigation } = navigationData;
    const categoryId = navigation.getParam('categoryId');
    const category = CATEGORIES.find(x => x.id === categoryId);

    return {
        headerTitle: category.title
    }
}

 
export default CategoryMealsScreen;
import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummyData';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation}) => {
    const categoryId = navigation.getParam('categoryId');
    const diplayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId)!==-1);
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
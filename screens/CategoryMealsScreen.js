import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { CATEGORIES } from '../data/dummyData';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation}) => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const categoryId = navigation.getParam('categoryId');
    const diplayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId)!==-1);

    if(diplayedMeals.length === 0 || !diplayedMeals) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontFamily: 'open-sans', fontSize: 30, marginVertical: 20}}>No meals found :)</Text>
            </View>
        );
    }

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
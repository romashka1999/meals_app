import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummyData';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
    const { navigation } = props;

    const categoryId = navigation.getParam('categoryId');

    const diplayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId)!==-1);

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl={itemData.item.imageUrl}
                onSelectMeal={() => navigation.navigate({routeName: 'MealDetail', params: {}})}/>
        )
    }
    

    return (  
        <View style={styles.screen}>
            <FlatList 
                data ={diplayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}/>
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const { navigation } = navigationData;
    const categoryId = navigation.getParam('categoryId');
    const category = CATEGORIES.find(x => x.id === categoryId);

    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
 
export default CategoryMealsScreen;
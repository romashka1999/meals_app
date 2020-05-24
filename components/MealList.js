import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = ({ displayedData, navigation }) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = (itemData) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl={itemData.item.imageUrl}
                onSelectMeal={() => navigation.navigate({
                    routeName: 'MealDetail', 
                    params: {
                        mealId: itemData.item.id, 
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
                    }
                })}/>
        )
    }
    return (  
        <View>
            <FlatList 
                data ={displayedData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}/>
        </View>
    );
}

 
export default MealList;
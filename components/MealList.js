import React from 'react';
import { View, FlatList } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ displayedData, navigation }) => {

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl={itemData.item.imageUrl}
                onSelectMeal={() => navigation.navigate({routeName: 'MealDetail', params: {mealId: itemData.item.id, mealTitle: itemData.item.title}})}/>
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
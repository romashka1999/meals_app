import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummyData';


const FavoritesScreen = ({ navigation }) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList 
                displayedData={favMeals}
                navigation={navigation}/>
}

FavoritesScreen.navigationOptions = (navigationData) => {
    const { navigation } = navigationData;
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName='ios-menu'
                    onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
    }
}

 
export default FavoritesScreen;
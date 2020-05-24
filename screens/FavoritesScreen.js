import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';


const FavoritesScreen = ({ navigation }) => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);
    return <MealList 
                displayedData={availableMeals}
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
import React from 'react';
import { Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';


const FavoritesScreen = ({ navigation }) => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);
    if(availableMeals.length === 0 || !availableMeals) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontFamily: 'open-sans', fontSize: 30, marginVertical: 20}}>No Favorites :)</Text>
            </View>
        );
    }
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
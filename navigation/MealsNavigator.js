import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavigatorOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitleAlign: 'center',
}

const MealsStackNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavigatorOptions
});

const FavoritesStackNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavigatorOptions
});

const tabScreenConfig = {
    Meals: { 
        screen: MealsStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={30} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={30} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const MealsTabNavigator = 
    Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(
        tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
        }
    ) 
    : createBottomTabNavigator(
        tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.primaryColor,
                activeBackgroundColor:'white',
                inactiveTintColor: 'black',
                inactiveBackgroundColor: '#ccc'  
            }
        }
    );

export default createAppContainer(MealsTabNavigator);
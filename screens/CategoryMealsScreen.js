import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummyData';
import Colors from '../constants/Colors';

const CategoryMealsScreen = (props) => {
    const { navigation } = props;

    const categoryId = navigation.getParam('categoryId');

    const category = CATEGORIES.find(x => x.id === categoryId);

    return (  
        <View style={styles.screen}>
            <Text>The meal {category.title}</Text>
            <Button title="go to MealDetail" onPress={() => {navigation.navigate({routeName: 'MealDetail'})}} />
            <Button title="go back" onPress={() => {navigation.goBack()}} />
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
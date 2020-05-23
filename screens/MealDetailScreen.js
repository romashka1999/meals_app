import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummyData';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {
    const { navigation } = props;

    const mealId = navigation.getParam('mealId');

    const meal = MEALS.find(meal => meal.id === mealId);

    return (  
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const { navigation } = navigationData;
    const mealId = navigation.getParam('mealId');
    const meal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: meal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favorite" 
                    iconName='ios-star'
                    onPress={() => console.log('onpresssss')}/>
            </HeaderButtons>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
 
export default MealDetailScreen;
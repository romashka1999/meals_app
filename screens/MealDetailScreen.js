import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text style={{fontFamily: 'open-sans', textAlign: 'center'}}>{props.children}</Text>
        </View>
    );
}

const MealDetailScreen = (props) => {
    const { navigation } = props;
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = navigation.getParam('mealId');
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(favMeal => favMeal.id === mealId));
    const meal = availableMeals.find(meal => meal.id === mealId);
    
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        navigation.setParams({isFav: currentMealIsFavorite});
    }, [currentMealIsFavorite]);

    return (  
        <ScrollView>
            <Image 
                style={styles.image}
                source={{uri: meal.imageUrl}}/>
            <View style={styles.details}>
                <Text style={{fontFamily: 'open-sans'}}>{meal.duration}m</Text>
                <Text style={{fontFamily: 'open-sans'}}>{meal.complexity.toUpperCase()}</Text>
                <Text style={{fontFamily: 'open-sans'}}>{meal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {meal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {meal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView> 
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const { navigation } = navigationData;
    const mealTitle = navigation.getParam('mealTitle');
    const toggleFavorite = navigation.getParam('toggleFav');
    const isFavorite = navigation.getParam('isFav');
    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favorite" 
                    iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavorite}/>
            </HeaderButtons>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: 200,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10
    },
    details: {
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 10,
        letterSpacing: 3,
        textTransform: 'uppercase'
    },
    listItem: {
        marginVertical: 5,
        marginHorizontal: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
});
 
export default MealDetailScreen;
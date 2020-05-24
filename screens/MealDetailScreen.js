import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummyData';
import CustomHeaderButton from '../components/HeaderButton';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text style={{fontFamily: 'open-sans', textAlign: 'center'}}>{props.children}</Text>
        </View>
    );
}

const MealDetailScreen = (props) => {
    const { navigation } = props;

    const mealId = navigation.getParam('mealId');

    const meal = MEALS.find(meal => meal.id === mealId);

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
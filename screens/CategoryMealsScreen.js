import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const CategoryMealsScreen = (props) => {
    const { navigation } = props;

    return (  
        <View style={styles.screen}>
            <Text>The meal</Text>
            <Button title="go to MealDetail" onPress={() => {navigation.navigate({routeName: 'MealDetail'})}} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
 
export default CategoryMealsScreen;
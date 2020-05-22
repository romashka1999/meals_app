import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const CategoriesScreen = (props) => {
    const { navigation } = props;

    return (  
        <View style={styles.screen}>
            <Text>The categories</Text>
            <Button title="go to CategoryMeals" onPress={() => {navigation.navigate({routeName: 'CategoryMeals'})}} />
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
 
export default CategoriesScreen;

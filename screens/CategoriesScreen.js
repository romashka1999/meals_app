import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummyData';
import Colors from '../constants/Colors';



const CategoriesScreen = (props) => {
    const { navigation } = props;

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => navigation.navigate({routeName:'CategoryMeals', params: {categoryId: itemData.item.id}})}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (  
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}/>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});
 
export default CategoriesScreen;

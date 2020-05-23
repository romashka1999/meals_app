import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummyData';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = (props) => {
    const { navigation } = props;

    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={()=> navigation.navigate({ routeName: 'CategoryMeals', params: { categoryId: itemData.item.id } }) }/>
    }

    return (  
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}/>
    );
}

 
export default CategoriesScreen;

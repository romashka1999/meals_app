import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummyData';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/HeaderButton';


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

CategoriesScreen.navigationOptions = (navigationData) => {
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

 
export default CategoriesScreen;

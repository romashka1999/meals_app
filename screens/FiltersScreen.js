import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Switch} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = ({label, data, setData}) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{label}</Text>
            <Switch 
                thumbColor={'#ccc'}
                trackColor={{false: Colors.accentColor, true: Colors.primaryColor}}
                value={data}
                onValueChange={newVal => setData(newVal)}/>
        </View>
    )
}

const FiltersScreen = (props) => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters])

    return (  
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label='Gluten-free' data={isGlutenFree} setData={setIsGlutenFree}/>
            <FilterSwitch label='Lactose-free' data={isLactoseFree} setData={setIsLactoseFree}/>
            <FilterSwitch label='Vegan' data={isVegan} setData={setIsVegan}/>
            <FilterSwitch label='Vegetarian' data={isVegetarian} setData={setIsVegetarian}/>
        </View>
    );
}

FiltersScreen.navigationOptions = (navigationData) => {
    const { navigation } = navigationData;
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName='ios-menu'
                    onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Save" 
                    iconName='ios-save'
                    onPress={navigation.getParam('save')}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});
 
export default FiltersScreen;
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

import Colors from '../constants/Colors';

const CategoryGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;

    // ripple effect for android which is supported for up to 21 versions
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent
                onPress={props.onSelect}>
                <View style={{...styles.container, backgroundColor: props.color}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 20,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;
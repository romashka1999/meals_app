import React, { Fragment } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native';

const MealItem = (props) => {

    let TouchableComponent = TouchableOpacity;

    // ripple effect for android which is supported for up to 21 versions
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (  
        <View style={styles.mealItem}>
            <TouchableComponent
                onPress={props.onSelectMeal}>
                    <Fragment>
                        <View style={{...styles.mealRow, ...styles.mealHeader}}>
                            <ImageBackground 
                                source={{uri: props.imageUrl}}
                                style={styles.bgImage}>
                                <View style={styles.titleContainer}>
                                    <Text 
                                        style={styles.title}
                                        numberOfLines={2}>{props.title}</Text>
                                </View>                              
                            </ImageBackground>
                        </View>
                        <View style={{...styles.mealRow, ...styles.mealDetail}}>
                            <Text>{props.duration}m</Text>
                            <Text>{props.complexity.toUpperCase()}</Text>
                            <Text>{props.affordability.toUpperCase()}</Text>
                        </View>
                    </Fragment>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        // flex: 1,
        height: 200,
        width: '90%',
        backgroundColor: "#ccc",
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 15,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
       width: '100%',
       height: '100%',
       justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
});
 
export default MealItem;
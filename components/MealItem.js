import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = (props) => {

    return (  
        <View style={styles.mealItem}>
            <TouchableOpacity
                onPress={props.onSelectMeal}>
                    <View>
                        <View style={{...styles.mealRow, ...styles.mealHeader}}>
                            <ImageBackground 
                                source={{uri: props.imageUrl}}
                                style={styles.bgImage}>
                                <View style={styles.titleContainer}>
                                    <Text 
                                        style={styles.title}
                                        numberOfLines={1}>{props.title}</Text>
                                </View>                              
                            </ImageBackground>
                        </View>
                        <View style={{...styles.mealRow, ...styles.mealDetail}}>
                            <Text style={{fontFamily: 'open-sans'}}>{props.duration}m</Text>
                            <Text style={{fontFamily: 'open-sans'}}>{props.complexity.toUpperCase()}</Text>
                            <Text style={{fontFamily: 'open-sans'}}>{props.affordability.toUpperCase()}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        height: 200,
        width: '90%',
        backgroundColor: "#ccc",
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'black'
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
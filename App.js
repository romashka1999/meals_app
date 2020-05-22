import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

const loadFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
}

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    if(!fontsLoaded) {
        return (
            <AppLoading 
                startAsync={loadFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={(err) => console.log(err)}/>
        );
    }

    return (
        <MealsNavigator />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
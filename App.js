import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';



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
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
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
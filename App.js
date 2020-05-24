import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens(); // for optimize efficency

const rootReducer = combineReducers({
    meals: mealsReducer
});

const store = createStore(rootReducer);


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
        <Provider
            store={store}>
            <MealsNavigator />
        </Provider>
    );
}


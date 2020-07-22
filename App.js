import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './src/Navigators/MainNavigator';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import MealsReducer from './src/store/reducers/MealReducer';
import CategoriesReducer from './src/store/reducers/CategoryReducer';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const loadFont = () => {
  return Font.loadAsync({
    'qs-m': require('./assets/fonts/Quicksand-Medium.ttf'),
    'qs-sb': require('./assets/fonts/Quicksand-SemiBold.ttf')
  });
}

const mainReducer = combineReducers({
  meals: MealsReducer,
  categories: CategoriesReducer
});

const store = createStore(mainReducer);

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading startAsync={loadFont} onFinish={() => setFontLoaded(true)} />;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

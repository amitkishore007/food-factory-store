import React from 'react'
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Color from '../Constants/Color';
import HeaderConfig from '../Config/HeaderConfig';

const MealStackNavigator = createStackNavigator({
    categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            title: 'Categories'
        }
    },
    categoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            title: 'Meals'
        }
    }
}, 
{
    initialRouteName: 'categories',
    defaultNavigationOptions: HeaderConfig

});

export default MealStackNavigator;

// export default createAppContainer(MealStackNavigator);

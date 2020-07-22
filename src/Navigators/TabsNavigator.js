import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MealsNavigator from './MealsNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import Color from '../Constants/Color';
import { Ionicons } from '@expo/vector-icons';

const TabsNavigator = createBottomTabNavigator({
    meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='md-restaurant' size={23} color={tabInfo.tintColor} />
            }
        }
    },
    favorite: {
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorite',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='md-star-outline' size={23} color={tabInfo.tintColor} />
            },
        }
    }
},
{
    tabBarOptions: {
        labelStyle: {
            fontSize: 14,
        },
        activeTintColor: Color.secondary,
        style: {
            backgroundColor: Color.primary
        }
    }
});

export default TabsNavigator;
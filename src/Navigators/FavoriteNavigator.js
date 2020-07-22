import { createStackNavigator } from 'react-navigation-stack';
import FavoriteMealsScreen from '../Screens/FavoriteMealsScreen';
import HeaderConfig from '../Config/HeaderConfig';

const FavoriteNavigator = createStackNavigator({
    favorite: {
        screen: FavoriteMealsScreen,
        navigationOptions: {
            title:'Favorite Meals'
        }
    }
}, 
{
    defaultNavigationOptions: HeaderConfig
})

export default FavoriteNavigator;
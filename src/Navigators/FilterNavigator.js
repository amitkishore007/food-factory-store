import { createStackNavigator } from 'react-navigation-stack';
import FilterMealsScreen from '../Screens/FilterMealsScreen';
import HeaderConfig from '../Config/HeaderConfig';

const FilterNavigator = createStackNavigator({
    filter: {
        screen: FilterMealsScreen
    }
},
{
    defaultNavigationOptions: HeaderConfig
});

export default FilterNavigator;
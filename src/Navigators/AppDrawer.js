import { createDrawerNavigator } from 'react-navigation-drawer';
import TabsNavigator from './TabsNavigator';
import FilterNavigator from './FilterNavigator';

const AppDrawer = createDrawerNavigator({
    mealTab: {
        screen: TabsNavigator,
        navigationOptions: {
            title: 'Home'
        }
    },
    filter: {
        screen: FilterNavigator,
        navigationOptions: {
            title: 'Filter',
        }
    },
});

export default AppDrawer;
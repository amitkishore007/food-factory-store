import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';

const FilterMealsScreen = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

FilterMealsScreen.navigationOptions = ({navigation}) => {
    return {
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item iconName="ios-menu" iconSize={23} onPress={() =>  navigation.toggleDrawer()}/>
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item iconName="ios-save" iconSize={23}/>
                </HeaderButtons>
            )
        }
    }
}

export default FilterMealsScreen;

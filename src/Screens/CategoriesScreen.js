import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableNativeFeedback, Platform, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import { CATEGORIES } from '../dummy-data/dummy-data';
import { loadCategories } from '../store/actions/CategoryActions';
import CategoryGridItem from '../Components/CategoryGridItem';


const CategoriesScreen = ({navigation}) => {

    useDispatch(loadCategories(CATEGORIES));

    const selectedState = useSelector((state) => state.categories);


    const goto = (item) => {
        navigation.navigate({ routeName: 'categoryMeals', params: { category: item } });
    }

    const listItem = (item) => {
        return <CategoryGridItem item={item.item} navigate={goto} />;
    }

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list} 
                data={selectedState.categories} 
                renderItem={listItem} 
                numColumns={2}
                keyExtractor={(item) => item.id}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        borderRightColor: 'black',
        borderWidth: 1,
    },
    listItem: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        margin: 10,
        justifyContent: 'flex-end',
        height: 100,
        width: '45%',
        alignItems: 'flex-end'
    }
});

CategoriesScreen.navigationOptions = ({navigation}) => {
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
                    <Item iconName="ios-star" iconSize={23}/>
                </HeaderButtons>
            )
        }
    }
}

export default CategoriesScreen;

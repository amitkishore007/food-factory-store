import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from '../Components/MealItem';

const CategoryMealsScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={[{id: '1'},{id: '2'},{id: '3'},{id: '4'}]} 
                renderItem={(item) => <MealItem item={item} />}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        width: '100%'
    }
});

export default CategoryMealsScreen;

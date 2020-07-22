import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableNativeFeedback, Platform, FlatList } from 'react-native';
import TouchableCmp from './Touchable';

const CategoryGridItem = ({item, navigate}) => {
    return (
        <View style={styles.container}>
            <TouchableCmp onPress={() => navigate(item)}>
                <View style={{...styles.listItem, backgroundColor: item.color}}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        padding: 10,
        margin: 10,
        justifyContent: 'flex-end',
        height: 150,
        alignItems: 'flex-end',
        elevation: 2,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontFamily:'qs-sb'
    }
});

export default CategoryGridItem;

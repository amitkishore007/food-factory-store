import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import TouchableCmp from './Touchable';

const MealItem = (props) => {
    return (
        <View style={styles.itemWrapper}>
            <TouchableCmp onPress={() => {}}>
                <View style={styles.item}>
                    <View style={{ ...styles.imageWrapper}}>
                        <ImageBackground source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg' }} style={styles.bgImage}>
                            <View style={styles.imageTitleWrapper}>
                                <Text style={styles.imageTitle}>Foreground Text</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.row, ...styles.footer}}>
                        <Text>Time</Text>
                        <Text>Category</Text>
                        <Text>Complexity</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        margin: 10
    },
    imageWrapper: {
        height: '80%',
    },
    bgImage: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    row: {
        flexDirection:'row'
    },
    imageTitleWrapper: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center'
    },
    imageTitle: {
        fontSize: 16,
        color:'#ffffff',
        fontFamily: 'qs-sb'
    },
    footer: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%'
    },
    item: {
        height: 200,
        borderRadius: 5,
        elevation: 2,
        overflow: 'hidden',
        backgroundColor: '#ffffff'
    }
});

export default MealItem;

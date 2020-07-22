import React from 'react';
import { TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';

const Touchable = (props) => {
    let TouchableCmp = TouchableHighlight;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return <TouchableCmp onPress={props.onPress}>{props.children}</TouchableCmp>;
}

export default Touchable;

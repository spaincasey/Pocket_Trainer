import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundcolor: '#B7D5D4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginTop: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;
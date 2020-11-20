import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 5,
        height: 200,
        borderColor: 'black'
    },
    textOneStyle: {
        borderWidth: 5,
        borderColor: 'red',
        flex: 6
    },
    textTwoStyle: {
        borderWidth: 5,
        borderColor: 'red',
        flex: 3
    },
    textThreeStyle: {
        borderWidth: 5,
        borderColor: 'red',
        flex: 3
    }
});

export default FlexBoxScreen;
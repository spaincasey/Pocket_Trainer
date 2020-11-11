import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExampleComponent = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is an Example Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});

export default ExampleComponent;
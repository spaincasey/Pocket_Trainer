import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Hi there!</Text>
            <Button
                onPress={() => navigation.navigate('Login')}
                title="Go to Login Screen"
            />
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Go to Pocket Trainer Home"
            />
            <Button
                onPress={() => navigation.navigate('ColorScreen')}
                title="Go to Color Demo"
            />
            <Button
                onPress={() => navigation.navigate('ColorAdjuster')}
                title="Go to Color Adjuster"
            />
            <Button
                onPress={() => navigation.navigate('TextScreen')}
                title="Go to Text Demo"
            />
            <Button
                onPress={() => navigation.navigate('FlexBoxScreen')}
                title="Go to Flex Box Demo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
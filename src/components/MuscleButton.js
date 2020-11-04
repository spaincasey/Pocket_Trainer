import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const MuscleButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log(props.muscleName)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.muscleIcon}</Text>
                </View>
                <Text style={styles.buttonText}>{props.muscleName}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 150,
        alignItems: 'center',
        borderColor: '#172A3A',
        borderWidth: 1,
        borderRadius: 5
    },
    touchableOpacity: {
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        marginVertical: 10
    }
});

export default MuscleButton;
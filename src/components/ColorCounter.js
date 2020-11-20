import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase ${color}`}
            />
            <Button
                onPress={() => onDecrease()}
                title={`Decrease ${color}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ColorCounter;
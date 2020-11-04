import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Home = () => {
    const buttons = [
        { name: 'muscle # 1' },
        { name: 'muscle # 2' },
        { name: 'muscle # 3' },
        { name: 'muscle # 4' },
        { name: 'muscle # 5' },
        { name: 'muscle # 6' },
        { name: 'muscle # 7' },
        { name: 'muscle # 8' },
        { name: 'muscle # 9' }
    ];

    return (
        <View>
            <FlatList
                keyExtractor={(button) => button.name}
                data={buttons}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}
            />
            <Button
                title="Login"
                onPress={() => console.log('Button pressed')}
            />
            <TouchableOpacity onPress={() => console.log('Register pressed')}>
                <Text>Register</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        marginVertical: 50
    }
});
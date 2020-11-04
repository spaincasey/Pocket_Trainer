import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Content>
                <Image source={require('../images/PocketTrainerLogo.png')} />
                <Form>
                    <Item floatingLabel style={styles.inputs}>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={styles.inputs}>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </Form>
            </Content>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    inputs: {
        flex: 1
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#74B3CE'
    },
    buttonText: {
        marginVertical: 10
    }
});

export default Login;
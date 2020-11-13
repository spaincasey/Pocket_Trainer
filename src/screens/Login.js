import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Form, Item, Input, Label } from 'native-base';

const Login = ({ navigation }) => {

    return (
        <Container style={styles.container}>
            <Image style={styles.image} source={require('../../assets/PocketTrainerLogo.png')} />
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
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {

    },
    grid: {
        justifyContent: 'center'
    },
    inputs: {
        width: '80%'
    },
    image: {
        width: 250,
        height: 250
    },
    column: {
        alignItems: 'center'
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
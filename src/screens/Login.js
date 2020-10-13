import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const Login = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const Login = ({ navigation }) => {
    return (
        <Container style={styles.container}>
            <Content style={styles.content}>
                <Grid style={styles.grid}>
                    <Col style={styles.column}>
                        <Image source={require('../../assets/PocketTrainerLogo.png')} />
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
                    </Col>
                </Grid>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    grid: {
        flex: 1
    },
    inputs: {
        width: '80%'
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
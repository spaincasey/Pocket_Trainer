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

<Container style={styles.container}>
    <Content style={styles.content}>
        <Grid style={styles.grid}>
            <Col style={styles.column}>
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
            </Col>
        </Grid>
    </Content>
</Container>
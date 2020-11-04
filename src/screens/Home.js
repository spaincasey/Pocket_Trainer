import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MuscleCategory from '../components/MuscleCategory';

const Home = () => {
    const categories = [
        {
            name: 'Category #1', muscles: [
                { name: 'muscle #1', icon: "icon #1" },
                { name: 'muscle #2', icon: "icon #2" },
                { name: 'muscle #3', icon: "icon #3" },
                { name: 'muscle #4', icon: "icon #4" }
            ]
        },
        {
            name: 'Category #2', muscles: [
                { name: 'muscle #5', icon: "icon #5" },
                { name: 'muscle #6', icon: "icon #6" }
            ]
        },
        {
            name: 'Category #3', muscles: [
                { name: 'muscle #7', icon: "icon #7" },
                { name: 'muscle #8', icon: "icon #8" },
                { name: 'muscle #9', icon: "icon #9" }
            ]
        },
        {
            name: 'Category #4', muscles: [
                { name: 'muscle #10', icon: "icon #10" },
                { name: 'muscle #11', icon: "icon #11" },
                { name: 'muscle #12', icon: "icon #12" },
                { name: 'muscle #13', icon: "icon #13" },
                { name: 'muscle #14', icon: "icon #14" }
            ]
        },
    ];

    return (
        <View>
            <FlatList
                keyExtractor={(category) => category.name}
                data={categories}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.viewStyle}>
                            <MuscleCategory categoryName={item.name} muscles={item.muscles}></MuscleCategory>
                        </View>
                    )
                }}
            />
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
    viewStyle: {
        marginBottom: 10,
        marginTop: 10
    },
    textStyle: {
        fontSize: 25,
    }
    ,
    subHeadingStyle: {
        fontSize: 14,
    }
});

export default Home;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MuscleCategory from '../components/MuscleCategory';

const Home = () => {
    const categories = [
        {
            name: 'Arms', muscles: [
                { name: 'Biceps', icon: require('../../assets/muscleIcons/biceps.png') },
                { name: 'Triceps', icon: require('../../assets/muscleIcons/triceps.png') },
                { name: 'forearms', icon: require('../../assets/muscleIcons/forearms.png') }
            ]
        },
        {
            name: 'Legs', muscles: [
                { name: 'Hamstrings', icon: require('../../assets/muscleIcons/hamstrings.png') },
                { name: 'Quads', icon: require('../../assets/muscleIcons/quads.png') },
                { name: 'Calves', icon: require('../../assets/muscleIcons/calves.png') },
                { name: 'Glutes', icon: require('../../assets/muscleIcons/glutes.png') }
            ]
        },
        {
            name: 'Core', muscles: [
                { name: 'Pecs', icon: require('../../assets/muscleIcons/pecs.png') },
                { name: 'Obliques', icon: require('../../assets/muscleIcons/pecs.png') },
                { name: 'Abs', icon: require('../../assets/muscleIcons/abs.png') }
            ]
        },
        {
            name: 'Shoulders/Back', muscles: [
                { name: 'Traps', icon: require('../../assets/muscleIcons/pecs.png') },
                { name: 'Deltoids', icon: require('../../assets/muscleIcons/pecs.png') },
                { name: 'Lower Back', icon: require('../../assets/muscleIcons/pecs.png') }
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
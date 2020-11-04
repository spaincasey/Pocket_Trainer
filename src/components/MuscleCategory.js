import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MuscleButton from './MuscleButton';

const MuscleCategory = (props) => {
    return (
        <View style={styles.view}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>{props.categoryName}</Text>
            </View>
            <ScrollView>
                <FlatList
                    numColumns={2}
                    style={styles.flatList}
                    keyExtractor={(muscle) => muscle.name}
                    data={props.muscles}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <MuscleButton muscleName={item.name} muscleIcon={item.icon}></MuscleButton>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        width: '90%',
        borderBottomColor: '#172A3A',
        borderBottomWidth: 1
    },
    headerText: {
        fontSize: 30,
        marginLeft: 10,
        marginBottom: 5
    },
    flatList: {
        overflow: 'visible'
    },
    view: {
        alignItems: 'center'
    }
});

export default MuscleCategory;
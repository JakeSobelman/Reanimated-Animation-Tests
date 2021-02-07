import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';

import Button from "../components/Button";

import { StackNavigationProps, Routes } from "../components/Navigation";

const HomeScreen = ({ navigation }: StackNavigationProps<Routes, "HomeScreen">) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Here I am!</Text>
            <Button label={"CardStack"} onPress={() => (navigation.navigate("CardStack"))}/>
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

    title: {
        fontSize: 40,
        textAlign: 'center'
    }
})

export default HomeScreen;
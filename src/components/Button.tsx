import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
    },

    label: {
        //fontFamily: "Inter-Regular",
        fontSize: 15,
        textAlign: "center",
    }
})

interface ButtonProps {
    label: string;
    onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
    const backgroundColor = "#2CB9B0";
    const color = "#ffffff";
    return (
        <RectButton 
        style={[styles.container, { backgroundColor }]} {...{ onPress }}>
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;
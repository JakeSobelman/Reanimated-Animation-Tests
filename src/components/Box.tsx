import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface BoxProps {
    width: number,
    height: number,
    borderRadius?: number,
    backgroundColor: string,
    title?: string,
    description?: string
}

const Box = ({ width, height, borderRadius, backgroundColor }: BoxProps) => {
    return (
        <View style={{width, height, borderRadius, backgroundColor}}/>
    );
}

export default Box;
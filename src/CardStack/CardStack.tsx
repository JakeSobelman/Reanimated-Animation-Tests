import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler"; 
import Animated, { useAnimatedGestureHandler, withSpring, useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash";

import Box from "../components/Box";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
    position: Animated.Adaptable<number>;
}

const Card = ({ position }: CardProps) => {
    const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
    const initScale = mix(position, 1, 0.9);

    const offsetY = mix(position, 0, -50);
    const translateY = useSharedValue(offsetY);
    const scale = useSharedValue(initScale);


    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {y: number, scale: number}>({
        onStart: (event, ctx) => {
            ctx.y = translateY.value;
            ctx.scale = scale.value;
        },
        onActive: (event, ctx) => {
            translateY.value = event.translationY + ctx.y;
            scale.value = ctx.scale + event.translationY/1000;
        }
    });

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {translateY: translateY.value},
                {scale: scale.value}
            ]
        }
    });

    return (
        <View style={[styles.container, {position: "absolute"}]}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={style}>
                        <Box 
                            width={width} 
                            height={height} 
                            backgroundColor={backgroundColor} 
                            borderRadius={borderRadius}
                        />

                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const CardStack = () => {
    return(
        <View style={styles.container}>
            <Card position={1}/>
            <Card position={0.5}/>
            <Card position={0}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default CardStack;
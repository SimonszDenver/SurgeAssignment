import React from "react"
import {View, Text, StyleSheet} from 'react-native';
import Button from "./Button";

function ErrorOverlay ({message, onConfirm}) {
    return <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An error occurred!</Text>
        <Text style={styles.text}>{message}</Text>
        <Button onPress={onConfirm}>Retry Again!</Button>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
        color: '#0b253f'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default ErrorOverlay;
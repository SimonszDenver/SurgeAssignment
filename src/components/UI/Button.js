import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native'

function Button ({children, onPress, mode, style}) {
    return(
        <View style={style}>
            <Pressable onPress={onPress}>
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#0b253f'
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: '#0b253f',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: '#123b63',
        borderRadius: 4
    }
})

export default Button;
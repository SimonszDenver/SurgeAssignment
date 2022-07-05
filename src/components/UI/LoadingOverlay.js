import React from "react"
import {View, ActivityIndicator, StyleSheet} from 'react-native';

function LoadingOverlay () {
    return <View style={styles.container}>
        <ActivityIndicator size='large' color='#0b253f' />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    }
});

export default LoadingOverlay;
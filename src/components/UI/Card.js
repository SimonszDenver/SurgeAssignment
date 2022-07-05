import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Card(props) {
    return (
        <View style={styles.cardContainer}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
      }
})

export default Card;
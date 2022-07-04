import { Pressable, View, Text, StyleSheet, Platform, Image } from 'react-native';
import React from 'react';
import Card from './UI/Card';

function MovieTile(props) {
    return (
        <Card>
            <View>
                <Image style={styles.image} source={{uri: props.image}} />
            </View>
            <View>
                <Text>{props.image}</Text>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%'
    }
})

export default MovieTile;
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import React from 'react';
import Card from './UI/Card';

const IMAGE_URL = "https://image.tmdb.org/t/p/w440_and_h660_face";

function MovieTile(props) {
    return (
        <Card>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: IMAGE_URL + props.movie.poster_path }} />
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.movie.title}</Text>
                    <Text style={styles.originalTitle}>({props.movie.original_title})</Text>
                    <View style={styles.dateLanguageContainer}>
                        <Text style={styles.movieDetails}>{props.movie.release_date}</Text>
                        <Text style={styles.movieDetails}>({props.movie.original_language})</Text>
                        <Text style={styles.movieDetails}>.</Text>
                        <View style={styles.adultResultContainer}>
                            <Text style={styles.adultResult}>{props.movie.adult ? 'All' : 'R'}</Text>
                        </View>
                    </View>
                    <View style={styles.overviewContainer}>
                        <Text numberOfLines={4} style={styles.overview}>{props.movie.overview}</Text>
                    </View>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        marginVertical: 12,
        borderRadius: 8,
        overflow: 'hidden'
    },
    detailContainer: {
        flex: 2
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 12,
        marginHorizontal: 10
    },
    dateLanguageContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 8
    },
    overviewContainer: {
        flex: 4,
        margin: 1,
    },
    adultResultContainer: {
        marginLeft: 5,
        borderWidth: 2,
        borderRadius: 4,
        height: 20,
        padding: 1,
        borderColor: '#9e9e9e',
    },
    image: {
        flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2
    },
    originalTitle: {
        color: '#bdbdbd',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 4
    },
    dot: {
        color: '#9e9e9e',
        fontSize: 20
    },
    movieDetails: {
        color: '#9e9e9e',
        fontSize: 13,
        marginRight: 5
    },
    overview: {
        color: '#787878',
    },
    adultResult: {
        color: '#787878',
        fontSize: 12,
        padding: 1
    }
})

export default MovieTile;
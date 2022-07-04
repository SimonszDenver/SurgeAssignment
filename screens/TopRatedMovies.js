import React from 'react';
import { FlatList, StyleSheet } from "react-native";
import MovieTile from "../components/MovieTile";
import { MOVIES } from "../data/dummy-data";

const IMAGE_URL = "https://image.tmdb.org/t/p/w440_and_h660_face";

function renderMovieItems(itemData) {
    return <MovieTile title={itemData.item.title} image={IMAGE_URL + itemData.item.poster_path}/>
}

function TopRatedMoviesScreen () {
    return <FlatList style={styles.screen}
        data={MOVIES}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieItems}
    />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    }
})

export default TopRatedMoviesScreen;
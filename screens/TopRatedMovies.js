import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";
import MovieTile from "../components/MovieTile";
import { MOVIES } from "../data/dummy-data";
import { fetchMovies } from '../util/http';

function renderMovieItems(itemData, index) {
    return <MovieTile title={itemData.item.title} movie={itemData.item} index={index}/>
}

function TopRatedMoviesScreen () {
    const [fetchedMovies, setFetchedMovies] = useState([]);

    useEffect(() => {
        async function getMovies(){
            const movies = await fetchMovies();
            setFetchedMovies(movies);
        }
        getMovies();
    }, []);

    return <FlatList style={styles.screen}
        data={fetchedMovies}
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
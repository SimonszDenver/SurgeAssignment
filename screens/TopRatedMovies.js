import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet } from "react-native";
import MovieTile from "../components/MovieTile";
import { MOVIES } from "../data/dummy-data";
import { MoviesContext } from '../store/movies-context';
import { fetchMovies } from '../util/http';

function renderMovieItems(itemData, index) {
    return <MovieTile title={itemData.item.title} movie={itemData.item} index={index}/>
}

function TopRatedMoviesScreen () {
    const moviesCtx = useContext(MoviesContext);

    useEffect(() => {
        async function getMovies(){
            const movies = await fetchMovies();
            moviesCtx.setMovies(movies);
        }
        getMovies();
    }, []);

    return <FlatList style={styles.screen}
        data={moviesCtx.movies}
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
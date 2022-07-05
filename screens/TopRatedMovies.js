import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";
import MovieTile from "../components/MovieTile";
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { MOVIES } from "../data/dummy-data";
import { MoviesContext } from '../store/movies-context';
import { fetchMovies } from '../util/http';

function renderMovieItems(itemData, index) {
    return <MovieTile title={itemData.item.title} movie={itemData.item} index={index}/>
}

function TopRatedMoviesScreen () {
    const [isFetching, setIsFetching] = useState(true);
    const moviesCtx = useContext(MoviesContext);

    useEffect(() => {
        async function getMovies(){
            setIsFetching(true);
            const movies = await fetchMovies();
            setIsFetching(false);
            moviesCtx.setMovies(movies);
        }
        getMovies();
    }, []);

    if (isFetching){
        return <LoadingOverlay />
    }

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
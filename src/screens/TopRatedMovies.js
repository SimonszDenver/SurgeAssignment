import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";
import MovieTile from "../components/MovieTile";
import ErrorOverlay from '../components/UI/ErrorOverlay,';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { MoviesContext } from '../store/movies-context';
import { fetchMovies } from '../util/http';

function renderMovieItems(itemData, index) {
    return <MovieTile title={itemData.item.title} movie={itemData.item} index={index} />
}

function TopRatedMoviesScreen() {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(false);

    const moviesCtx = useContext(MoviesContext);

    useEffect(() => {
        async function getMovies() {
            setIsFetching(true);
            try {
                const movies = await fetchMovies();
                moviesCtx.setMovies(movies);
            } catch (error) {
                setError('Could not fetch movies!!!');
            }
            setIsFetching(false);
        }
        getMovies();
    }, [error]);

    function errorHandler() {
        setError(null);
    }

    if (error) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    if (isFetching) {
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
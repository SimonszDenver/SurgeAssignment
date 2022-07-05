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
    const [refreshing, setRefreshing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const moviesCtx = useContext(MoviesContext);

    useEffect(() => {
        async function getMovies() {
            setIsFetching(true);
            try {
                const movies = await fetchMovies(currentPage);
                moviesCtx.setMovies(movies);
            } catch (error) {
                setError('Could not fetch movies!!!');
            }
            setIsFetching(false);
        }
        getMovies();
        setCurrentPage(1);
        if(refreshing){
            setRefreshing(false);
        }
    }, [error, refreshing]);

    function onEndReachHandler() {
        async function getMovies() {
            try {
                const movies = await fetchMovies(currentPage + 1);
                const allMoviesList = [...moviesCtx.movies.values, ...movies.values];
                moviesCtx.setMovies({values: allMoviesList, totalPage: movies.totalPage});
            } catch (error) {
                setError('Could not fetch movies!!!');
            }
        }
        setCurrentPage(currentPage + 1);
        getMovies();
    }

    function onRefreshHandler() {
        setRefreshing(true);
    }

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
        data={moviesCtx.movies.values}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieItems}
        refreshing={refreshing}
        onRefresh={onRefreshHandler}
        onEndReached={onEndReachHandler}
    />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    }
})

export default TopRatedMoviesScreen;
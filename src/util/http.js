import React from "react";
import axios from "axios";
import Movie from "../models/movie";

import { MOVIES_URL, API_KEY } from '@env';

export async function fetchMovies(currentPage) {
    console.log('Page : ',currentPage);
    const response = await axios.get(MOVIES_URL + '/top_rated', { params: { api_key: API_KEY, page: currentPage } });

    const movies = [];

    for (const key in response.data.results) {
        movies.push(
            new Movie(
                response.data.results[key].id,
                response.data.results[key].title,
                response.data.results[key].adult,
                response.data.results[key].backdrop_path,
                response.data.results[key].genre_ids,
                response.data.results[key].original_language,
                response.data.results[key].original_title,
                response.data.results[key].overview,
                response.data.results[key].popularity,
                response.data.results[key].poster_path,
                response.data.results[key].release_date,
                response.data.results[key].video,
                response.data.results[key].vote_average,
                response.data.results[key].vote_count)
        );
    }

    return {values: movies, totalPage: response.data.total_pages};
}
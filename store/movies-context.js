import React, { createContext, useReducer } from "react";

export const MoviesContext = createContext({
    movies: [],
    setMovies: (movies) => {}
});

function moviesReducer(state, action) {
    switch (action.type) {
        case 'SET':
            return action.payload;
        default: return state;
    }
}

function MoviesContextProvider({ children }) {
    const [moviesState, dispatch] = useReducer(moviesReducer, []);

    function setMovies(movies){
        dispatch({type: 'SET', payload: movies})
    }

    const value = {
        movies: moviesState,
        setMovies: setMovies
    }

    return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}

export default MoviesContextProvider;
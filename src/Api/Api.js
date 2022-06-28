import axios from 'axios';

const key = `b0ded52037f68ea6d2f9a8275209b0c4`;
const url = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
    try{
        const response = await axios.get(
            `${url}trending/movie/day?api_key=${key}`
        );
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getMovieId(id) {
    try {
        const response = await axios.get(
            `${url}movie/${id}?api_key=${key}&language=en-US`
        );
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getMovieReview(id) {
    try {
        const response = await axios.get(
            `${url}movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
        );
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getMovieCast(id) {
    try {
        const response = await axios.get(
            `${url}movie/${id}/credits?api_key=${key}&language=en-US&page=1`
        );
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getMovieByQuery(query) {
    try {
        const response = await axios.get(
            `${url}search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const data = response.data;
        const results = data.results;
        return results;
    } catch (error) {
        console.error(error);
    }
}
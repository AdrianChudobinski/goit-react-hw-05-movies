import axios from 'axios';

const API_KEY = '5f1e3b1759fab00680a52c6138151c80'; 

const BASE_URL = 'https://api.themoviedb.org/3';


const get = async (url, params = {}) => {
  try {
    const response = await axios.get(url, {
      params: { ...params, api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.status_message || 'Something went wrong'
    );
  }
};


export const getTrendingMovies = () => {
  const url = `${BASE_URL}/trending/movie/day`;
  return get(url);
};


export const searchMovies = query => {
  const url = `${BASE_URL}/search/movie`;
  const params = { query };
  return get(url, params);
};


export const getMovieDetails = movieId => {
  const url = `${BASE_URL}/movie/${movieId}`;
  return get(url);
};


export const getMovieCredits = movieId => {
  const url = `${BASE_URL}/movie/${movieId}/credits`;
  return get(url);
};


export const getMovieReviews = movieId => {
  const url = `${BASE_URL}/movie/${movieId}/reviews`;
  return get(url);
};
import axios from 'axios';

const API_KEY = '5f1e3b1759fab00680a52c6138151c80';
const BASE_URL = 'https://api.themoviedb.org/3';

const get = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { params: { ...params, api_key: API_KEY } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.status_message || 'Something went wrong');
  }
};

const createApiUrl = (path, params = {}) => {
  const queryParams = new URLSearchParams({ ...params, api_key: API_KEY });
  return `${BASE_URL}${path}?${queryParams}`;
};

export const getTrendingMovies = () => get(createApiUrl('/trending/movie/day'));

export const searchMovies = query => {
  const params = { query };
  return get(createApiUrl('/search/movie', params));
};

export const getMovieDetails = movieId => get(createApiUrl(`/movie/${movieId}`));

export const getMovieCredits = movieId => get(createApiUrl(`/movie/${movieId}/credits`));

export const getMovieReviews = movieId => get(createApiUrl(`/movie/${movieId}/reviews`));

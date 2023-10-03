import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/Api';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.log('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.home}>
      <h1>Popularne filmy</h1>
      {movies.map(movie => (
        <div key={movie.id} className={css.movieItem}>
          <Link to={`/movies/${movie.id}`} className={css.movieLink}>
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

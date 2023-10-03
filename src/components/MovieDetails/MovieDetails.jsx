import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from 'services/Api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [movieData, castData] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCredits(movieId),
        ]);
        setMovie(movieData);
        setCast(castData.cast);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    fetchData();
  }, [movieId]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        if (activeTab === 'reviews') {
          const reviewsData = await getMovieReviews(movieId);
          setReviews(reviewsData.results);
        }
      } catch (error) {
        console.log('Error fetching reviews:', error);
      }
    }

    fetchReviews();
  }, [movieId, activeTab]);

  const getYear = releaseDate => new Date(releaseDate).getFullYear();

  const handleGoBack = () => {
    navigate('/movies');
  };

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div className={css.movieDetails}>
      <button className={css.goBack} onClick={handleGoBack}>
        <Link to="/movies" className={css.linkStyle}>
          &larr; Go Back
        </Link>
      </button>

      {movie && (
        <div className={css.movieInfo}>
          <div className={css.moviePoster}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              className={css.posterImage}
            />
          </div>
          <div className={css.movieDetailsText}>
            <h1>
              {movie.original_title} ({getYear(movie.release_date)})
            </h1>
            <h2>User Score: {movie.vote_average * 10}%</h2>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      )}

      <div className={css.tabs}>
        <ul className={css.ulStyle}>
          <li>
            <button
              onClick={() => handleTabClick('cast')}
              className={`${activeTab === 'cast' ? css.activeTab : ''} ${
                css.castButton
              }`}
            >
              Cast
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick('reviews')}
              className={`${activeTab === 'reviews' ? css.activeTab : ''}`}
            >
              Reviews
            </button>
          </li>
        </ul>
      </div>

      {activeTab === 'cast' && (
        <div className={css.castMargin}>
          <h2>Cast</h2>
          {cast.length > 0 ? (
            cast.map(actor => (
              <div key={actor.id} className={css.castItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                  className={css.castImage}
                />
                <div>
                  <h4>{actor.name}</h4>
                  <p>Character: {actor.character}</p>
                </div>
              </div>
            ))
          ) : (
            <div>No cast available</div>
          )}
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className={css.reviewsMargin}>
          <h2>Reviews</h2>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </div>
            ))
          ) : (
            <div>No reviews available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

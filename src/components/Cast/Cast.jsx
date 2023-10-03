import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/Api';

const Cast = ({ match }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(match.params.movieId);
        setCast(response.cast);
      } catch (error) {
        console.log('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [match.params.movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.map(actor => (
        <div key={actor.id}>
          <h4>{actor.name}</h4>
          <p>{actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;

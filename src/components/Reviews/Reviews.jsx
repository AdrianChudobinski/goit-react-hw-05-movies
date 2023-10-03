import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/Api';

const Reviews = ({ match }) => {
  const movieId = match.params.movieId;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

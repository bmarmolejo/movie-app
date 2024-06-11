import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'b0bd9aa5a49153985d1e23b37df41415';
const API_URL = 'https://api.themoviedb.org/3/discover/movie';

const GenreMovies = ({ genreId }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            with_genres: genreId
          }
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getMovies();
  }, [genreId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Movies in this genre:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreMovies;


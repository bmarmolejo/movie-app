import React, { useState } from 'react';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
];

const GenreSelector = ({ onGenreSelect }) => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0].id);

  const handleGenreChange = (e) => {
    const genreId = parseInt(e.target.value);
    setSelectedGenre(genreId);
    onGenreSelect(genreId);
  };

  return (
    <div>
      <label htmlFor="genre">Select Genre:</label>
      <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreSelector;

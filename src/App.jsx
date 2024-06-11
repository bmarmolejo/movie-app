import { useState } from 'react'
import './App.css'
import DisplayMovie from '../components/DisplayMovie/DisplayMovie'
import GenreSelector from '../components/GenreSelector/GenreSelector'

const App = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(80); // Crime genre by default

  return (
    <div>
      <h1>Movie Browser</h1>
      <GenreSelector onGenreSelect={setSelectedGenreId} />
      <DisplayMovie genreId={selectedGenreId} />
    </div>
  );
};

export default App;
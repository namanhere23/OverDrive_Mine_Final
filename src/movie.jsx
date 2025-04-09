import React, { useState } from 'react';

function Movie() {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovie = async () => {
    setError('');
    setMovieData(null);
    try {
      const res = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`);
      const data = await res.json();
      if (data.Response === 'True') {
        setMovieData(data);

        
        setTimeout(() => {
          const resultSection = document.getElementById('movie-result');
          if (resultSection) {
            resultSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setError('Movie not found');
      }
    } catch (err) {
      setError('Error fetching movie data');
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Movie Search</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchMovie()}
          style={styles.input}
        />

        <button onClick={fetchMovie} style={styles.button}>Search</button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {movieData && (
        <div id="movie-result" style={styles.result}>
          <img src={movieData.Poster} alt="Poster" width="200" />
          <p><strong>Title:</strong> {movieData.Title}</p>
          <p><strong>Year:</strong> {movieData.Year}</p>
          <p><strong>Rating:</strong> {movieData.imdbRating}</p>
          <p><strong>Director:</strong> {movieData.Director}</p>
          <p><strong>Genre:</strong> {movieData.Genre}</p>
          <p><strong>Plot:</strong> {movieData.Plot}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '40px auto', 
  },
  heading: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  result: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default Movie;
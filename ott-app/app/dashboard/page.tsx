/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import MovieCard from '../movieCard';
import { log } from 'console';

export default function Dashboard() {
  const [movies, setMovies] = React.useState([]);
  const apiKey = process.env.API_KEY;
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=13622fc50c5257d370284ea008163f90&language=en-US&page=1&adult=false`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
    })
    .catch((error) => {
      console.error('Error fetching movie data:', error);
    });

  return (
    <main>
      <section>
        <h1>Trending movies</h1>
      </section>
      <section>
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            id={movie.id}
          />
        ))}
      </section>
    </main>
  );
}

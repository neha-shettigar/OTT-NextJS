/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import MovieCard from '../movieCard';
import styled from 'styled-components';

export default function Dashboard() {
  const [movies, setMovies] = React.useState([]);
  const apiKey = process.env.API_KEY;
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=13622fc50c5257d370284ea008163f90&language=en-US&page=3&adult=false`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
      console.log(data.results);
      
    })
    .catch((error) => {
      console.error('Error fetching movie data:', error);
    });

  return (
    <Wrapper>
      <Section>
        <Title>Trending movies</Title>
      </Section>
      <Section>
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={
              movie.release_date ? movie.release_date.substring(0, 4) : null
            }
            id={movie.id}
          />
        ))}
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #170436;
  display: flex;
  flex-direction: column;
  gap:2%;

 
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 40px;
  color: #e8d8f0;
`;

const Section = styled.div`
  background-color: #170436;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap:1%;

`;

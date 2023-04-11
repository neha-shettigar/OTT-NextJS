'use client';

import styled from 'styled-components';
import { getLanguageName } from './getLanguage';

import Image from 'next/image';
interface MovieDetailsInterface {
  id?: string;
  title?: string;
  poster_path: string;
  release_date?: string;
  status?: string;
    overview?: string;
    genre?: string;
    ratings?: number;
    language: string;
    tagline?: string;
}

const MovieDetails = ({
  id,
  title,
  poster_path,
  release_date,
  status,
    overview,
    genre,
    ratings,
    language,
  tagline,
}: MovieDetailsInterface) => {
  const imagePosterWithPrefix = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;

  return (
    <Wrapper>
      {/* loader is a function that generates the URLs for your image */}
      <Image
        loader={() => poster_path}
        src={poster_path}
        alt=''
        width={350}
        height={420}
      />
      <Details>
        <Title>{title}</Title>
        <Status>{tagline}</Status>
        <Status>{status}</Status>
        <Date>{release_date}</Date>
        <Overview>{overview}</Overview>
        <Status>{genre}</Status>
        <Status>{ratings}</Status>
        <Status>{getLanguageName(language)}</Status>
      </Details>
    </Wrapper>
  );
};

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #170436;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  display: flex;
  margin-top: 4rem;
  padding: 1.5rem 3rem;
  background-color: #e8d8f0;
  justify-content: space-between;
  width:70%;
`;

const Date = styled.h4`
  font-size: 0.75rem;
  text-align: center;
  color: #170436;
`;

const Details = styled.h4`
  display: flex;
  flex-direction: column;
  width:50%;
`;

const Status = styled.h4`
  font-size: 0.75rem;
  text-align: center;
  color: #170436;
`;

const Overview = styled.p`
  font-size: 0.75rem;
  text-align: center;
  color: #170436;
`;

export default MovieDetails;

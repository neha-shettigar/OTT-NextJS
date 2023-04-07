'use client';

import styled from 'styled-components';
import { getLanguageName } from './getLanguage';

// import Image from 'next/image';
interface MovieDetailsInterface {
  id?: string;
  title?: string;
  poster_path?: string;
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
      {/* <Image
          loader={() => imagePosterWithPrefix}
          src={imagePosterWithPrefix}
          alt=''
          width={250}
          height={320}
        /> */}

      <Title>{title}</Title>
      <Status>{tagline}</Status>
      <h5>{status}</h5>
      <Date>{release_date}</Date>
      <Overview>{overview}</Overview>
      <h5>{genre}</h5>
      <h5>{ratings}</h5>
      <h5>{getLanguageName(language)}</h5>
    </Wrapper>
  );
};

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Date = styled.h4`
  font-size: 0.75rem;
  text-align: center;
`;

const Status = styled.h4`
  font-size: 0.75rem;
  text-align: center;
`;

const Overview = styled.p`
  font-size: 0.75rem;
  text-align: center;
`;

export default MovieDetails;

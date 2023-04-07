import MovieDetails from '../movieDetails';
import styled from 'styled-components';

export default async function Details({ params }: any) {
  const { details } = params;

  let imagePosterWithPrefix: any;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${details}?api_key=13622fc50c5257d370284ea008163f90&language=en-US`
  );

  console.log(data);

  const movieData = data;
  const result = await data.json();
  console.log(result);

  console.log(params);
  imagePosterWithPrefix = `https://www.themoviedb.org/t/p/w220_and_h330_face${result.poster_path}`;

  return (
    <main>
      <MovieDetails
        key={result.id}
        id={result.id}
        title={result.title}
        // poster_path={result.poster_path}
        release_date={result.release_date? result.release_date.substring(0,4):null}
        status={result.status}
        overview={result.overview}
        ratings={result.vote_average}
        genre={result.genres?.map((genre: any) => genre.name)}
        language={result.original_language}
        tagline={result.tagline}
      />
    </main>
  );
}

// const Wrapper = styled.main`
// display:flex;
// `

// import Image from 'next/image';

export default async function Details({ params }: any) {
  const { details } = params;

  let imagePosterWithPrefix: any;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${details}?api_key=13622fc50c5257d370284ea008163f90&language=en-US`
  );

  console.log(data);

  const result = await data.json();

  console.log(params);
  imagePosterWithPrefix = `https://www.themoviedb.org/t/p/w220_and_h330_face${result.poster_path}`;

  return (
    <main>
      <h5>{result.title}</h5>
      {}
      {/* <Image
        loader={() => imagePosterWithPrefix}
        src={imagePosterWithPrefix}
        alt=''
        width={150}
        height={220}
      /> */}
      <h6>{result.tagline}</h6>
      <p>{result.overview}</p>
      <span>{result.status}</span>
    </main>
  );
}

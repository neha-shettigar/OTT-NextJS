import Link from 'next/link';
import Image from 'next/image';
interface MovieCardInterface {
  id?: string;
  title?: string;
  poster_path: string;
  release_date?: string;
}

const MovieCard = ({
  id,
  title,
  poster_path,
  release_date,
}: MovieCardInterface) => {
  const imagePosterWithPrefix = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
 

  return (
    <main>
      <section>
        <Link href={`/${id}`}>
          {/* loader is a function that generates the URLs for your image */}
          <Image
            loader={() => imagePosterWithPrefix}
            src={imagePosterWithPrefix}
            alt=''
            width={150}
            height={220}
          />
        </Link>
        <h2>{title}</h2>
        <h6>{release_date}</h6>
      </section>
    </main>
  );
};

export default MovieCard;

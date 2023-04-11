import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
interface MovieCardInterface {
  id?: string;
  title?: string;
  poster_path: string;
  release_date: string;
}

const MovieCard = ({
  id,
  title,
  poster_path,
  release_date,
}: MovieCardInterface) => {
  const imagePosterWithPrefix = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
 

  return (
   
      <Section>
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
        <Title>{title}</Title>
        <Date>{release_date}</Date>
      </Section>
    
  );
};

const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 30px;
  text-align:center;
  color: #170436;
  margin: 0;
`;

const Date = styled.div`
  color: #170436;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
 
 
`;

const Section = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  height:23rem;
  width:10%;
  background-color: #e8d8f0;
  margin-bottom:2%;
`;




export default MovieCard;

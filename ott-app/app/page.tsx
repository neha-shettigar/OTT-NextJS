'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Wrapper>
      <Title>Welcome to OTT App</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #170436;
  display:flex;
  align-items:center;
  justify-contents:center;
  height:90vh;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 190px;
  color: #e8d8f0;
  text-align:center;
  margin:auto;
`;

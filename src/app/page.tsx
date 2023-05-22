'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Radio from './Radio';
import { styled } from 'styled-components';
import Login from './Login';
import SignUp from './SignUp';

export default function Home() {
  const Title = styled.h1`
    color: blue;
    display: flex;
    align-text: center;
    ailign-items: center;
    justify-content: center;
  `;

  return (
    <main className={styles.main}>
      <SignUp />
    </main>
  )
}

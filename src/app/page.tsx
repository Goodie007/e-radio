import Image from 'next/image'
import styles from './page.module.css'
import Radio from './Radio'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Radio</h1>
      <Radio />
    </main>
  )
}

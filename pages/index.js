import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Entrepotes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenu sur <a href='https://entrepotes.ca/'>Entrepotes.ca!</a>
        </h1>

        <div className={styles.grid}>
          <a href='./annonces' className={styles.card}>
            Clickez ici pour commencer !
          </a>
        </div>
      </main>
    </div>
  );
}

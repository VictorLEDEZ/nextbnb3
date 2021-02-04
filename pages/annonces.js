import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ isConnected }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Entrepotes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Choisisez une annonce qui vous plait !</h1>
        <a href='/'>Retourner au Menu</a>

        <div className={styles.grid}>
          <a href='https://entrepotes.ca/' className={styles.card}>
            <h3>Documentation</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}

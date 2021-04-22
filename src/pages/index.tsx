import Link from 'next/link';
import Head from 'next/head';

import api from './services/server.json';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
    <Head>
      <title>Traveler | Início</title>
    </Head>
      <header className={styles.headerContainer}>
        <img src="/images/logo.svg" alt="traveler" />
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.boxLeft}>
          <h1>Viva uma grande aventura</h1>
          <p>
            Descubra locais incríveis para se visitar em cidades
            maravilhosas de Santa Catarina.
        </p>
          <Link href="/cities">
            <a>Descobrir todos os lugares</a>
          </Link>
        </div>

        <div className={styles.boxRight}>
          <div className={styles.cardAreaLeft}>
            {api.cities.slice(0, api.cities.length / 2).map(city => (
              <div key={city.id} className={styles.card}>
                <img src={city.image} alt={city.name} />
                <strong>{city.name}</strong>
                <span>{city.local} locais</span>
              </div>
            ))}
          </div>
          <div className={styles.cardAreaRight}>
            {api.cities.slice(api.cities.length / 2, api.cities.length).map(city => (
              <div key={city.id} className={styles.card}>
                <img src={city.image} alt={city.name} />
                <strong>{city.name}</strong>
                <span>{city.local} locais</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

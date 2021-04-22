import Head from 'next/head';
import { FiSearch, FiX } from 'react-icons/fi';

import api from '../services/server.json';

import styles from './styles.module.scss';

export default function Cities() {
  return (
    <>
      <Head>
        <title>Traveler | Cidades</title>
      </Head>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/logo.svg" alt="Traveler" />
          <div className={styles.inputContainer}>
            <FiSearch size={20} color="#F25D27" />
            <input type="text" placeholder="Qual cidade você procura?" />
            <FiX size={20} color="#A0ACB3" />
          </div>
        </div>
      </header>
      
      <main className={styles.mainContainer}>
        <h2>Selecione uma cidade</h2>
        
        <section>
          {api.cities.map(city => (
            <div key={city.id} className={styles.card}>
            <img src={city.image} alt={city.name} />
            <strong>{city.name}</strong>
            <span>{city.local} locais</span>
          </div>
          ))}
        </section>
      </main>
    </>
  );
}
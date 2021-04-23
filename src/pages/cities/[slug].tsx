import { GetStaticPaths, GetStaticProps } from 'next';
import { FiArrowLeft, FiCalendar, FiCamera, FiCoffee } from 'react-icons/fi';
import Link from 'next/link';

import api from '../services/server.json';

import styles from './city.module.scss';

interface CityObject {
  id: number;
  name: string;
  image: string;
  description: string;
  local: number,
  attractionsCount: number;
  foodsCount: number;
  eventsCount: number;
}

interface InformationProps {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string[];
}

interface CityProps {
  city: CityObject;
  attractions: InformationProps[];
  foods: InformationProps[];
  events: InformationProps[];
}

export default function CityDetails({ city, attractions, events, foods }: CityProps) {
  console.log(attractions)

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/logo.svg" alt="Traveler" />
          <Link href="/cities">
            <a>
              <FiArrowLeft size={20} color="#A0ACB3" />
            </a>
          </Link>
          <span>Cidade</span>
        </div>
      </header>

      <main className={styles.mainContainer}>
        <img src={city.image} alt={city.name} />

        <section className={styles.sectionInfoCity}>
          <div className={styles.infoContainer}>
            <h2>{city.name}</h2>
            <p>{city.description}</p>
          </div>

          <div className={styles.locationsContainer}>
            <div className={styles.locations}>
              <span className={styles.iconContainer}>
                <FiCamera size={30} color="#F25D27" />
              </span>
              <div className={styles.content}>
                <strong>{city.attractionsCount}</strong>
                <span className={styles.footer}>Pontos <br />Turísticos</span>
              </div>
            </div>
            <div className={styles.locations}>
              <span className={styles.iconContainer}>
                <FiCoffee size={30} color="#F25D27" />
              </span>
              <div className={styles.content}>
                <strong>{city.foodsCount}</strong>
                <span className={styles.footer}>Comida <br />e Bebida</span>
              </div>
            </div>
            <div className={styles.locations}>
              <span className={styles.iconContainer}>
                <FiCalendar size={30} color="#F25D27" />
              </span>
              <div className={styles.content}>
                <strong>{city.eventsCount}</strong>
                <span className={styles.footer}>Eventos <br />Organizados</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const city = api.cities.find(city => city.name === slug);
  const attractions = api.places.attractions.filter(attraction => attraction.city === slug);
  const foods = api.places.foods.filter(food => food.city === slug);
  const events = api.places.events.filter(event => event.city === slug);

  return {
    props: {
      city,
      attractions,
      foods,
      events
    },
  }
}
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScenarioCard from '@/components/ScenarioCard';
import { scenarios } from '@/data/scenarios';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBannerWrapper}>
            <Image
              src="/images/hero_banner.png"
              alt="Welcome to MinhaAula – Travelers at US airport"
              fill
              className={styles.heroBanner}
              priority
              sizes="(max-width: 900px) 100vw, 900px"
            />
            <div className={styles.heroOverlay} />
          </div>

          <h1 className={styles.heroTitle}>
            Aprenda Inglês para sua{' '}
            <span className={styles.heroTitleAccent}>Viagem aos EUA</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Pratique situações reais de viagem com diálogos interativos, vocabulário essencial e dicas culturais.
          </p>
        </section>

        <section>
          <div className={styles.sectionTitle}>
            <h2 className={styles.sectionTitleText}>
              🎯 Escolha um Cenário
            </h2>
            <p className={styles.sectionSubText}>
              Choose a scenario to practice
            </p>
          </div>

          <div className={styles.grid}>
            {scenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

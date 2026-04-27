'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Scenario } from '@/data/scenarios';
import styles from './ScenarioCard.module.css';

interface ScenarioCardProps {
  scenario: Scenario;
}

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  return (
    <Link
      href={`/scenario/${scenario.id}`}
      className={`${styles.card} ${styles[scenario.color]}`}
      id={`scenario-card-${scenario.id}`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={scenario.imagePath}
          alt={scenario.title}
          width={400}
          height={180}
          className={styles.image}
          priority
        />
        <div className={styles.iconOverlay}>
          {scenario.icon}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{scenario.title}</h3>
        <p className={styles.titlePt}>{scenario.titlePt}</p>
        <p className={styles.description}>{scenario.descriptionPt}</p>
        <div className={styles.arrow}>→</div>
      </div>
      <div className={styles.accentBar} />
    </Link>
  );
}

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.encouragement}>
          You&apos;re doing great! Keep practicing! 🌟
        </p>
        <p className={styles.encouragementPt}>
          Você está indo muito bem! Continue praticando!
        </p>
        <p className={styles.credits}>
          Made with <span className={styles.heart}>♥</span> by MinhaAula · Inglês para Viajantes Brasileiros
        </p>
      </div>
    </footer>
  );
}

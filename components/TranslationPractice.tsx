'use client';

import { useState } from 'react';
import { ImportantPhrase } from '@/data/scenarios';
import styles from './TranslationPractice.module.css';

interface TranslationPracticeProps {
  phrases?: ImportantPhrase[];
}

// Helper to normalize strings for comparison
const normalizeString = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[.,!?]/g, '')
    .trim();
};

export default function TranslationPractice({ phrases }: TranslationPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [finished, setFinished] = useState(false);

  if (!phrases || phrases.length === 0) {
    return <div className={styles.empty}>Nenhuma frase importante disponível para este cenário.</div>;
  }

  const currentPhrase = phrases[currentIndex];

  const handleNext = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setInputValue('');
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setInputValue('');
    setFinished(false);
  };

  if (finished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishedContainer}>
          <div className={styles.trophy}>🏆</div>
          <h2 className={styles.title}>Tradução Concluída!</h2>
          <p className={styles.subtitle}>Você revisou todas as frases cruciais deste cenário.</p>
          <button className={styles.resetBtn} onClick={handleReset}>
            Treinar Novamente 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tradução</h2>

      <div className={styles.progressText}>
        Frase {currentIndex + 1} de {phrases.length}
      </div>

      <div className={styles.card}>
        <h3 className={styles.phrasePt}>{currentPhrase.pt}</h3>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.input}
            placeholder="Digite a tradução em inglês..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleNext();
              }
            }}
          />

          <div className={styles.buttons}>
            <button 
              className={styles.nextBtn} 
              onClick={handleNext}
            >
              Próximo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

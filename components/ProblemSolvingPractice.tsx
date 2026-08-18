'use client';

import { useState } from 'react';
import { ProblemSituation } from '@/data/scenarios';
import styles from './ProblemSolvingPractice.module.css';

interface ProblemSolvingPracticeProps {
  problems?: ProblemSituation[];
}

export default function ProblemSolvingPractice({ problems }: ProblemSolvingPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [finished, setFinished] = useState(false);

  if (!problems || problems.length === 0) {
    return <div className={styles.empty}>Nenhum problema disponível para este cenário.</div>;
  }

  const currentProblem = problems[currentIndex];

  const handleNext = () => {
    if (currentIndex < problems.length - 1) {
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
          <div className={styles.trophy}>🎉</div>
          <h2 className={styles.title}>Parabéns!</h2>
          <p className={styles.subtitle}>Você revisou como lidar com os imprevistos deste cenário.</p>
          <button className={styles.resetBtn} onClick={handleReset}>
            Treinar Novamente 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🚨 Resolução de Problemas</h2>
      <p className={styles.subtitle}>Escreva em inglês como você reagiria a essa situação no mundo real.</p>

      <div className={styles.progressText}>
        Problema {currentIndex + 1} de {problems.length}
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>⚠️</div>
        <h3 className={styles.descriptionPt}>{currentProblem.descriptionPt}</h3>

        <div className={styles.inputWrapper}>
          <textarea
            className={styles.input}
            placeholder="O que você falaria? (Digite aqui...)"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
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

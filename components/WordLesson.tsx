'use client';

import { useState } from 'react';
import { VocabularyItem } from '@/data/scenarios';
import styles from './WordLesson.module.css';

interface WordLessonProps {
  vocabulary: VocabularyItem[];
  onComplete?: () => void;
}

export default function WordLesson({ vocabulary, onComplete }: WordLessonProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!vocabulary || vocabulary.length === 0) return null;

  const currentWord = vocabulary[currentIndex];
  const progress = ((currentIndex) / vocabulary.length) * 100;

  const handleNext = () => {
    if (currentIndex < vocabulary.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      if (onComplete) {
        onComplete();
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishedContainer}>
          <div className={styles.finishedIcon}>🎉</div>
          <h2 className={styles.title}>Aula Concluída!</h2>
          <p className={styles.subtitle} style={{ marginBottom: 'var(--space-xl)' }}>
            Você revisou todas as palavras deste cenário. Agora é hora de testar seus conhecimentos!
          </p>
          <div className={styles.controls}>
            <button className={`${styles.button} ${styles.prevButton}`} onClick={handleRestart}>
              Revisar Novamente
            </button>
            <button className={`${styles.button} ${styles.nextButton}`} onClick={() => {
               // A small hack to scroll up or hint them to use the Practice tab
               window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              Ir para os Jogos 🎮
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>Aula das Palavras</h2>
        <p className={styles.subtitle}>Estude o vocabulário antes de praticar</p>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
      </div>

      <div className={styles.cardArea}>
        <h3 className={styles.englishWord}>{currentWord.english}</h3>
        <div className={styles.translationBox}>
          🇧🇷 {currentWord.portuguese}
        </div>
      </div>

      <div className={styles.controls}>
        <button 
          className={`${styles.button} ${styles.prevButton}`} 
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ← Anterior
        </button>
        <button 
          className={`${styles.button} ${currentIndex === vocabulary.length - 1 ? styles.finishButton : styles.nextButton}`} 
          onClick={handleNext}
        >
          {currentIndex === vocabulary.length - 1 ? 'Concluir ✨' : 'Próxima →'}
        </button>
      </div>
    </div>
  );
}

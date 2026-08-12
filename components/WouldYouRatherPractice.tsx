'use client';

import { useState } from 'react';
import { WouldYouRatherQuestion } from '@/data/scenarios';
import styles from './WouldYouRatherPractice.module.css';

interface WouldYouRatherPracticeProps {
  questions: WouldYouRatherQuestion[];
}

export default function WouldYouRatherPractice({ questions }: WouldYouRatherPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return <div className={styles.empty}>Nenhuma pergunta disponível para este cenário.</div>;
  }

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option: 'A' | 'B') => {
    if (selectedOption) return; // prevent double click
    setSelectedOption(option);
    
    // Auto advance after a short delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setShowTranslation(false);
      } else {
        setIsFinished(true);
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishedContainer}>
          <div className={styles.finishedIcon}>🎉</div>
          <h2 className={styles.title}>Fim de Jogo!</h2>
          <p className={styles.subtitle}>
            Você respondeu todas as perguntas do Would You Rather.
          </p>
          <button className={styles.resetButton} onClick={() => {
            setIsFinished(false);
            setCurrentIndex(0);
            setSelectedOption(null);
            setShowTranslation(false);
          }}>
            Jogar Novamente 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>⚖️ Would You Rather...</h2>
        <p className={styles.progress}>
          Pergunta {currentIndex + 1} de {questions.length}
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <button 
          className={`${styles.card} ${selectedOption === 'A' ? styles.selected : ''} ${selectedOption === 'B' ? styles.dimmed : ''}`}
          onClick={() => handleSelect('A')}
          disabled={!!selectedOption}
        >
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>Option A</span>
            <p className={styles.englishText}>{currentQuestion.optionAEn}</p>
            {showTranslation && <p className={styles.portugueseText}>{currentQuestion.optionAPt}</p>}
          </div>
        </button>

        <div className={styles.vsCircle}>OR</div>

        <button 
          className={`${styles.card} ${selectedOption === 'B' ? styles.selected : ''} ${selectedOption === 'A' ? styles.dimmed : ''}`}
          onClick={() => handleSelect('B')}
          disabled={!!selectedOption}
        >
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>Option B</span>
            <p className={styles.englishText}>{currentQuestion.optionBEn}</p>
            {showTranslation && <p className={styles.portugueseText}>{currentQuestion.optionBPt}</p>}
          </div>
        </button>
      </div>

      <div className={styles.controls}>
        <button 
          className={styles.translateBtn} 
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? '👁️ Ocultar Tradução' : '👁️ Mostrar Tradução'}
        </button>
      </div>
    </div>
  );
}

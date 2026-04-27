'use client';

import { useState, useEffect, useMemo } from 'react';
import { DialogueLine } from '@/data/scenarios';
import styles from './SentenceBuilder.module.css';

interface SentenceBuilderProps {
  dialogues: DialogueLine[];
  onComplete?: () => void;
}

export default function SentenceBuilder({ dialogues, onComplete }: SentenceBuilderProps) {
  // Select 3 or 4 significant sentences to practice (not too short)
  const practiceLines = useMemo(() => {
    return dialogues
      .filter(d => d.english.split(' ').length > 3)
      .slice(0, 5);
  }, [dialogues]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | '' }>({ text: '', type: '' });

  const currentLine = practiceLines[currentIndex];

  useEffect(() => {
    if (currentLine) {
      const words = currentLine.english.split(' ');
      setShuffledWords([...words].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
      setFeedback({ text: '', type: '' });
    }
  }, [currentIndex, currentLine]);

  const handleWordClick = (word: string, index: number) => {
    if (feedback.type === 'success') return;
    
    // Add to selected
    setSelectedWords([...selectedWords, word]);
    
    // Remove from shuffled (temporarily)
    const newShuffled = [...shuffledWords];
    newShuffled.splice(index, 1);
    setShuffledWords(newShuffled);
  };

  const handleReset = () => {
    const words = currentLine.english.split(' ');
    setShuffledWords([...words].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setFeedback({ text: '', type: '' });
  };

  const handleCheck = () => {
    const currentAttempt = selectedWords.join(' ');
    if (currentAttempt === currentLine.english) {
      setFeedback({ text: 'Muito bem! Correct! ✨', type: 'success' });
      
      // If last one
      if (currentIndex === practiceLines.length - 1) {
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 1500);
      }
    } else {
      setFeedback({ text: 'Ops! Tente novamente. Try again!', type: 'error' });
      setTimeout(() => {
        handleReset();
      }, 1500);
    }
  };

  const nextSentence = () => {
    setCurrentIndex(prev => prev + 1);
  };

  if (practiceLines.length === 0) return null;

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h2 className={styles.title}>🎉 Excelente!</h2>
          <p className={styles.subtitle}>Você praticou as frases principais com sucesso.</p>
        </div>
        <button className={`${styles.button} ${styles.nextButton}`} onClick={() => { setCurrentIndex(0); setIsFinished(false); }}>
          Praticar Novamente
        </button>
      </div>
    );
  }

  const progress = ((currentIndex) / practiceLines.length) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>Construa a Frase</h2>
        <p className={styles.subtitle}>Coloque as palavras na ordem correta / Build the sentence</p>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
      </div>

      <div className={styles.gameArea}>
        <div className={styles.translationBox}>
          🇧🇷 "{currentLine.portuguese}"
        </div>

        <div className={styles.targetArea}>
          {selectedWords.map((word, idx) => (
            <span key={idx} className={styles.wordCard}>{word}</span>
          ))}
          {selectedWords.length === 0 && (
            <span style={{ color: '#999' }}>Clique nas palavras abaixo...</span>
          )}
        </div>

        <div className={styles.wordsArea}>
          {shuffledWords.map((word, idx) => (
            <button
              key={idx}
              className={styles.wordCard}
              onClick={() => handleWordClick(word, idx)}
            >
              {word}
            </button>
          ))}
        </div>

        <div className={styles.feedback}>
          <span className={feedback.type === 'success' ? styles.feedbackSuccess : styles.feedbackError}>
            {feedback.text}
          </span>
        </div>

        <div className={styles.controls}>
          {feedback.type !== 'success' ? (
            <>
              <button className={`${styles.button} ${styles.resetButton}`} onClick={handleReset}>
                Resetar
              </button>
              <button 
                className={`${styles.button} ${styles.checkButton}`} 
                onClick={handleCheck}
                disabled={shuffledWords.length > 0}
              >
                Verificar
              </button>
            </>
          ) : (
            currentIndex < practiceLines.length - 1 && (
              <button className={`${styles.button} ${styles.nextButton}`} onClick={nextSentence}>
                Próxima Frase →
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { VocabularyItem } from '@/data/scenarios';
import styles from './WordScramble.module.css';

interface WordScrambleProps {
  vocabulary: VocabularyItem[];
}

export default function WordScramble({ vocabulary }: WordScrambleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [scrambled, setScrambled] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const currentItem = vocabulary[currentIndex];

  useEffect(() => {
    if (currentItem) {
      const word = currentItem.english.toLowerCase().replace(/[^a-z]/g, '');
      const scrambledWord = word.split('').sort(() => Math.random() - 0.5).join('');
      setScrambled(scrambledWord);
      setUserInput('');
      setFeedback('');
      setIsCorrect(false);
    }
  }, [currentIndex, currentItem]);

  const handleCheck = () => {
    const cleanInput = userInput.toLowerCase().replace(/[^a-z]/g, '');
    const cleanTarget = currentItem.english.toLowerCase().replace(/[^a-z]/g, '');
    
    if (cleanInput === cleanTarget) {
      setFeedback('Correto! Well done! 🌟');
      setIsCorrect(true);
    } else {
      setFeedback('Quase lá... tente de novo! Try again.');
    }
  };

  const nextWord = () => {
    setCurrentIndex((currentIndex + 1) % vocabulary.length);
  };

  if (!currentItem) return null;

  return (
    <div className={styles.container}>
      <h3 style={{ textAlign: 'center' }}>Palavra Embaralhada</h3>
      <p className={styles.translation}>Dica: "{currentItem.portuguese}"</p>
      
      <div className={styles.scrambledWord}>
        {scrambled}
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          className={styles.input}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Digite a palavra em inglês..."
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          disabled={isCorrect}
        />
        
        <div className={`${styles.feedback} ${isCorrect ? styles.success : styles.error}`}>
          {feedback}
        </div>

        <div className={styles.controls}>
          {!isCorrect ? (
            <button className={`${styles.button} ${styles.checkButton}`} onClick={handleCheck}>
              Verificar
            </button>
          ) : (
            <button className={`${styles.button} ${styles.nextButton}`} onClick={nextWord}>
              Próxima Palavra →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

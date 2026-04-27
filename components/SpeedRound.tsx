'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './SpeedRound.module.css';

interface VocabularyItem {
  english: string;
  portuguese: string;
}

interface SpeedRoundProps {
  vocabulary: VocabularyItem[];
}

export default function SpeedRound({ vocabulary }: SpeedRoundProps) {
  const [gameStatus, setGameStatus] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<{
    portuguese: string;
    correct: string;
    options: string[];
  } | null>(null);

  const generateQuestion = useCallback(() => {
    const item = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    const distractors = vocabulary
      .filter(v => v.english !== item.english)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2)
      .map(v => v.english);
    
    const options = [item.english, ...distractors].sort(() => 0.5 - Math.random());
    
    setCurrentQuestion({
      portuguese: item.portuguese,
      correct: item.english,
      options
    });
  }, [vocabulary]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStatus === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameStatus('finished');
    }
    return () => clearInterval(timer);
  }, [gameStatus, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameStatus('playing');
    generateQuestion();
  };

  const handleAnswer = (option: string) => {
    if (option === currentQuestion?.correct) {
      setScore(s => s + 1);
    }
    generateQuestion();
  };

  return (
    <div className={styles.gameContainer}>
      {gameStatus === 'idle' && (
        <div className={styles.screen}>
          <h3>⚡ Speed Round</h3>
          <p>Traduza o máximo de palavras que conseguir em 30 segundos!</p>
          <button className={styles.primaryButton} onClick={startGame}>Começar / Start</button>
        </div>
      )}

      {gameStatus === 'playing' && currentQuestion && (
        <div className={styles.screen}>
          <div className={styles.header}>
            <div className={styles.timer}>🕒 {timeLeft}s</div>
            <div className={styles.score}>Pontos: {score}</div>
          </div>
          
          <div className={styles.questionCard}>
            <span className={styles.label}>Traduza:</span>
            <h2 className={styles.portugueseWord}>{currentQuestion.portuguese}</h2>
          </div>

          <div className={styles.optionsGrid}>
            {currentQuestion.options.map((option, idx) => (
              <button 
                key={idx} 
                className={styles.optionButton}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {gameStatus === 'finished' && (
        <div className={styles.screen}>
          <h3>🏁 Tempo Esgotado!</h3>
          <div className={styles.finalScore}>
            <span>Você acertou:</span>
            <div className={styles.scoreNumber}>{score}</div>
            <span>palavras!</span>
          </div>
          <button className={styles.primaryButton} onClick={startGame}>Tentar Novamente</button>
        </div>
      )}
    </div>
  );
}

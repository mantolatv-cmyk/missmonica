'use client';

import React, { useState, useEffect } from 'react';
import styles from './ListeningChallenge.module.css';

interface DialogueLine {
  english: string;
  portuguese: string;
}

interface ListeningChallengeProps {
  dialogues: DialogueLine[];
}

export default function ListeningChallenge({ dialogues }: ListeningChallengeProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const generateQuestion = () => {
    const correctLine = dialogues[Math.floor(Math.random() * dialogues.length)].english;
    const distractors = dialogues
      .filter(d => d.english !== correctLine)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2)
      .map(d => d.english);
    
    const allOptions = [correctLine, ...distractors].sort(() => 0.5 - Math.random());
    
    setOptions(allOptions);
    setSelectedOption(null);
    setIsCorrect(null);
    return correctLine;
  };

  const playAudio = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      
      // Use the high-quality female voice logic
      const voices = window.speechSynthesis.getVoices();
      const highQualityPatterns = ['Natural', 'Online', 'Google US', 'Premium'];
      let voice = voices.find(v => v.lang === 'en-US' && highQualityPatterns.some(p => v.name.includes(p)));
      if (!voice) {
        voice = voices.find(v => v.lang.startsWith('en') && ['Samantha', 'Aria', 'Jenny'].some(n => v.name.includes(n)));
      }
      if (voice) utterance.voice = voice;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStart = () => {
    setGameStarted(true);
    setScore(0);
    const q = generateQuestion();
    setTimeout(() => playAudio(q), 500);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const correctLine = dialogues.find(d => options.includes(d.english) && !options.filter(o => o !== d.english).includes(d.english))?.english; 
    // Simplified: find which one was the correct one from original source
    // Actually better to store the correct answer when generating
  };

  // Improved state tracking
  const [correctAnswer, setCorrectAnswer] = useState('');

  const nextQuestion = () => {
    const q = generateQuestion();
    setCorrectAnswer(q);
    playAudio(q);
  };

  const startNewGame = () => {
    setScore(0);
    setGameStarted(true);
    const q = generateQuestion();
    setCorrectAnswer(q);
    setTimeout(() => playAudio(q), 500);
  };

  const checkAnswer = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    const correct = option === correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  return (
    <div className={styles.gameContainer}>
      {!gameStarted ? (
        <div className={styles.startScreen}>
          <h3>🎧 Desafio de Audição</h3>
          <p>Ouça a frase em inglês e escolha a opção correta.</p>
          <button className={styles.primaryButton} onClick={startNewGame}>Começar / Start</button>
        </div>
      ) : (
        <div className={styles.quizScreen}>
          <div className={styles.stats}>
            <span>Acertos: {score}</span>
            <button className={styles.replayButton} onClick={() => playAudio(correctAnswer)}>
              🔊 Ouvir Novamente
            </button>
          </div>

          <div className={styles.optionsGrid}>
            {options.map((option, idx) => (
              <button
                key={idx}
                className={`${styles.optionButton} ${
                  selectedOption === option 
                    ? (isCorrect ? styles.correct : styles.wrong)
                    : ''
                }`}
                onClick={() => checkAnswer(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedOption && (
            <div className={styles.feedback}>
              <p className={isCorrect ? styles.correctText : styles.wrongText}>
                {isCorrect ? '✅ Muito bem! / Well done!' : `❌ Ops! A resposta era: ${correctAnswer}`}
              </p>
              <button className={styles.primaryButton} onClick={nextQuestion}>
                Próxima / Next ➡️
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { VocabularyItem } from '@/data/scenarios';
import ProgressBar from './ProgressBar';
import styles from './VocabMatch.module.css';

interface VocabMatchProps {
  vocabulary: VocabularyItem[];
  onComplete?: () => void;
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const confettiColors = ['#E8E0F0', '#D4F0E7', '#FDDCBD', '#D6EAF8', '#F9D977', '#F28B82', '#6BCB8E'];

export default function VocabMatch({ vocabulary, onComplete }: VocabMatchProps) {
  const [selectedEnglish, setSelectedEnglish] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [wrongPt, setWrongPt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Shuffle Portuguese side once
  const shuffledPtIndices = useMemo(() => {
    return shuffleArray(vocabulary.map((_, i) => i));
  }, [vocabulary]);

  const isComplete = matchedPairs.size === vocabulary.length;

  useEffect(() => {
    if (isComplete && vocabulary.length > 0) {
      setShowConfetti(true);
      onComplete?.();
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, vocabulary.length, onComplete]);

  const handleEnglishClick = useCallback((index: number) => {
    if (matchedPairs.has(index)) return;
    setSelectedEnglish(index);
    setWrongPt(null);
  }, [matchedPairs]);

  const handlePortugueseClick = useCallback((originalIndex: number) => {
    if (matchedPairs.has(originalIndex) || selectedEnglish === null) return;
    setAttempts(prev => prev + 1);

    if (selectedEnglish === originalIndex) {
      // Correct match
      setMatchedPairs(prev => new Set([...prev, originalIndex]));
      setScore(prev => prev + 1);
      setSelectedEnglish(null);
      setWrongPt(null);
    } else {
      // Wrong match
      setWrongPt(originalIndex);
      setTimeout(() => setWrongPt(null), 600);
    }
  }, [selectedEnglish, matchedPairs]);

  const handleReset = () => {
    setSelectedEnglish(null);
    setMatchedPairs(new Set());
    setWrongPt(null);
    setScore(0);
    setAttempts(0);
    setShowConfetti(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>🎯 Combine o Vocabulário / Match the Vocabulary</h3>
        <p className={styles.headerSub}>
          Clique na palavra em inglês e depois na tradução correta
        </p>
      </div>

      <ProgressBar
        current={matchedPairs.size}
        total={vocabulary.length}
        label="Progresso / Progress"
      />

      <div className={styles.scoreBar}>
        <span className={styles.scoreBadge}>✅ Acertos: {score}</span>
        <span className={styles.scoreBadge}>🎯 Tentativas: {attempts}</span>
      </div>

      {!isComplete ? (
        <div className={styles.columns}>
          <div>
            <p className={styles.columnTitle}>🇺🇸 English</p>
            <div className={styles.wordList}>
              {vocabulary.map((item, index) => (
                <button
                  key={`en-${index}`}
                  className={`${styles.wordItem} ${
                    matchedPairs.has(index) ? styles.wordItemMatched :
                    selectedEnglish === index ? styles.wordItemSelected : ''
                  }`}
                  onClick={() => handleEnglishClick(index)}
                  disabled={matchedPairs.has(index)}
                >
                  {item.english}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.columnTitle}>🇧🇷 Português</p>
            <div className={styles.wordList}>
              {shuffledPtIndices.map((originalIndex) => (
                <button
                  key={`pt-${originalIndex}`}
                  className={`${styles.wordItem} ${
                    matchedPairs.has(originalIndex) ? styles.wordItemMatched :
                    wrongPt === originalIndex ? styles.wordItemIncorrect : ''
                  }`}
                  onClick={() => handlePortugueseClick(originalIndex)}
                  disabled={matchedPairs.has(originalIndex)}
                >
                  {vocabulary[originalIndex].portuguese}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.celebration}>
          <p className={styles.celebrationTitle}>🎉 Parabéns! / Congratulations!</p>
          <p className={styles.celebrationSub}>
            Você acertou todas as {vocabulary.length} palavras em {attempts} tentativas!
          </p>
          <button className={styles.resetButton} onClick={handleReset}>
            🔄 Jogar Novamente / Play Again
          </button>
        </div>
      )}

      {showConfetti && (
        <div className={styles.confettiContainer}>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={styles.confettiPiece}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * -10}%`,
                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

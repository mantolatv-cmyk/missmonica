'use client';

import { useState } from 'react';
import { FlashcardItem } from '@/data/scenarios';
import styles from './DirectionalFlashcard.module.css';

interface DirectionalFlashcardProps {
  flashcards: FlashcardItem[];
}

export default function DirectionalFlashcard({ flashcards }: DirectionalFlashcardProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className={styles.grid}>
      {flashcards.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} ${flippedCards.has(index) ? styles.cardFlipped : ''}`}
          onClick={() => toggleFlip(index)}
          role="button"
          tabIndex={0}
          aria-label={`Flashcard: ${card.english}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleFlip(index);
            }
          }}
        >
          <div className={styles.cardInner}>
            {/* Front Face */}
            <div className={`${styles.cardFace} ${styles.front}`}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <span className={styles.cardEnglish}>{card.english}</span>
              <span className={styles.flipHint}>tap to flip</span>
            </div>
            {/* Back Face */}
            <div className={`${styles.cardFace} ${styles.back}`}>
              <span className={styles.cardIcon}>🇧🇷</span>
              <span className={styles.cardPortuguese}>{card.portuguese}</span>
              <span className={styles.flipHint}>tap to flip back</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

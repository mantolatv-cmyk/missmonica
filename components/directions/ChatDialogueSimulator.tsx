'use client';

import { useState, useRef, useEffect } from 'react';
import { DialogueLine } from '@/data/scenarios';
import styles from './ChatDialogueSimulator.module.css';

interface ChatDialogueSimulatorProps {
  dialogues: DialogueLine[];
  onComplete?: () => void;
}

export default function ChatDialogueSimulator({ dialogues, onComplete }: ChatDialogueSimulatorProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [revealedTranslations, setRevealedTranslations] = useState<Set<number>>(new Set());
  const chatRef = useRef<HTMLDivElement>(null);

  const isComplete = visibleCount >= dialogues.length;

  const handleNext = () => {
    if (isComplete || isTyping) return;

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const next = visibleCount + 1;
      setVisibleCount(next);
      if (next >= dialogues.length) {
        onComplete?.();
      }
    }, 800);
  };

  const toggleTranslation = (index: number) => {
    setRevealedTranslations(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleReset = () => {
    setVisibleCount(0);
    setIsTyping(false);
    setRevealedTranslations(new Set());
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleCount, isTyping]);

  const getNextSpeaker = () => {
    if (visibleCount >= dialogues.length) return null;
    return dialogues[visibleCount].speaker;
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatArea} ref={chatRef}>
        {dialogues.slice(0, visibleCount).map((line, index) => (
          <div
            key={index}
            className={`${styles.bubble} ${
              line.speaker === 'tourist' ? styles.bubbleTourist : styles.bubbleLocal
            }`}
            onClick={() => toggleTranslation(index)}
            style={{ animationDelay: '0ms' }}
          >
            <div className={styles.speakerTag}>
              <span>{line.speaker === 'tourist' ? '🧳' : '🙋'}</span>
              <span>{line.speaker === 'tourist' ? 'Tourist' : 'Local'}</span>
            </div>
            <div className={styles.english}>{line.english}</div>
            <div className={`${styles.portuguese} ${
              revealedTranslations.has(index) ? styles.portugueseVisible : ''
            }`}>
              🇧🇷 {line.portuguese}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className={`${styles.typingIndicator} ${
            getNextSpeaker() === 'tourist' ? styles.typingRight : ''
          }`}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        )}
      </div>

      <div className={styles.controls}>
        {!isComplete ? (
          <>
            <button
              className={styles.nextButton}
              onClick={handleNext}
              disabled={isTyping}
            >
              {visibleCount === 0 ? '💬 Iniciar Conversa / Start Conversation' : '➡️ Próxima Frase / Next Line'}
            </button>
            <p className={styles.tapHint}>
              💡 Toque na mensagem para ver a tradução
            </p>
          </>
        ) : (
          <div className={styles.completion}>
            <p className={styles.completionTitle}>🎉 Conversa Completa!</p>
            <p className={styles.completionSub}>
              Dialogue Complete! Tap any message to review the translations.
            </p>
            <button className={styles.resetButton} onClick={handleReset}>
              🔄 Praticar Novamente / Practice Again
            </button>
          </div>
        )}

        <div className={styles.progressDots}>
          {dialogues.map((_, i) => (
            <div
              key={i}
              className={`${styles.progressDot} ${
                i < visibleCount ? styles.progressDotDone :
                i === visibleCount ? styles.progressDotActive : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

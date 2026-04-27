'use client';

import { useState } from 'react';
import { DialogueLine } from '@/data/scenarios';
import styles from './DialogueBlock.module.css';

interface DialogueBlockProps {
  dialogues: DialogueLine[];
  onComplete?: () => void;
}

const speakerNames: Record<string, { name: string; icon: string }> = {
  native: { name: 'Native Speaker', icon: '🇺🇸' },
  student: { name: 'You (Student)', icon: '🎓' },
  tourist: { name: 'Tourist', icon: '🧳' },
  local: { name: 'Friendly Local', icon: '🙋' },
};

export default function DialogueBlock({ dialogues, onComplete }: DialogueBlockProps) {
  const [revealedLines, setRevealedLines] = useState<number>(0);
  const [revealedTranslations, setRevealedTranslations] = useState<Set<number>>(new Set());

  const speak = (text: string, speakerType: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger translation toggle
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      let voices = window.speechSynthesis.getVoices();
      
      // Categorize speakers into two roles to ensure voice contrast
      const isPrimary = ['native', 'tourist', 'local'].includes(speakerType);
      
      // Define voice pools for each role
      // Pool 1: Primary speakers (usually the "teacher" or "local")
      const primaryNames = ['Aria', 'Jenny', 'Google US English', 'Samantha'];
      // Pool 2: Secondary speakers (usually the "student" or "visitor")
      const secondaryNames = ['Guy', 'David', 'Zira', 'Victoria', 'Microsoft Mark'];

      let selectedVoice: SpeechSynthesisVoice | undefined;

      if (isPrimary) {
        // Try to find a primary voice (preferring Natural/Online)
        selectedVoice = voices.find(v => 
          v.lang.startsWith('en-US') && 
          (v.name.includes('Natural') || v.name.includes('Online')) &&
          primaryNames.some(name => v.name.includes(name))
        ) || voices.find(v => primaryNames.some(name => v.name.includes(name)));
      } else {
        // Try to find a secondary voice
        selectedVoice = voices.find(v => 
          v.lang.startsWith('en-US') && 
          (v.name.includes('Natural') || v.name.includes('Online')) &&
          secondaryNames.some(name => v.name.includes(name))
        ) || voices.find(v => secondaryNames.some(name => v.name.includes(name)));
      }

      // Fallback if no specific voice found for that pool
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.startsWith('en-US') && (isPrimary ? !v.name.includes('Male') : true));
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.lang = 'en-US';
      
      // Distinct settings for each role to further differentiate
      const isNatural = selectedVoice?.name.includes('Natural');
      if (isPrimary) {
        utterance.rate = isNatural ? 0.95 : 0.85;
        utterance.pitch = 1.0;
      } else {
        utterance.rate = isNatural ? 0.90 : 0.80;
        // Slightly different pitch to distinguish even if voices are similar
        utterance.pitch = isPrimary ? 1.0 : 1.08; 
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleRevealNext = () => {
    if (revealedLines < dialogues.length) {
      const next = revealedLines + 1;
      setRevealedLines(next);
      if (next === dialogues.length && onComplete) {
        onComplete();
      }
    }
  };

  const toggleTranslation = (index: number) => {
    setRevealedTranslations((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const getBubbleClass = (speaker: string) => {
    switch (speaker) {
      case 'native': return styles.bubbleNative;
      case 'student': return styles.bubbleStudent;
      case 'tourist': return styles.bubbleTourist;
      case 'local': return styles.bubbleLocal;
      default: return styles.bubbleNative;
    }
  };

  return (
    <div className={styles.container}>
      {dialogues.map((line, index) => {
        const isVisible = index < revealedLines;
        const speaker = speakerNames[line.speaker] || { name: line.speaker, icon: '💬' };

        return (
          <div
            key={index}
            className={`${styles.bubble} ${getBubbleClass(line.speaker)} ${!isVisible ? styles.hidden : ''}`}
            onClick={() => isVisible && toggleTranslation(index)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {isVisible && (
              <button 
                className={styles.audioButton} 
                onClick={(e) => speak(line.english, line.speaker, e)}
                title="Ouça a pronúncia / Listen to pronunciation"
              >
                🔊
              </button>
            )}
            <div className={styles.speakerLabel}>
              <span>{speaker.icon}</span>
              <span>{speaker.name}</span>
            </div>
            <div className={styles.english}>{line.english}</div>
            <div
              className={`${styles.portuguese} ${revealedTranslations.has(index) ? styles.portugueseVisible : ''}`}
            >
              🇧🇷 {line.portuguese}
            </div>
          </div>
        );
      })}

      {revealedLines < dialogues.length && (
        <button
          className={styles.nextButton || ''}
          onClick={handleRevealNext}
          style={{
            alignSelf: 'center',
            background: 'linear-gradient(135deg, var(--color-lavender-deep), var(--color-sky-deep))',
            color: 'white',
            padding: 'var(--space-sm) var(--space-xl)',
            borderRadius: 'var(--radius-full)',
            fontWeight: 'var(--fw-semibold)',
            fontSize: 'var(--fs-base)',
            cursor: 'pointer',
            border: 'none',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform var(--transition-spring), box-shadow var(--transition-base)',
            marginTop: 'var(--space-md)',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = 'scale(1.05)';
            (e.target as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = 'scale(1)';
            (e.target as HTMLElement).style.boxShadow = 'var(--shadow-md)';
          }}
        >
          Next Line →
        </button>
      )}

      {revealedLines > 0 && revealedLines < dialogues.length && (
        <p className={styles.tapHint}>
          💡 Toque na frase para ver a tradução ou 🔊 para ouvir a pronúncia
        </p>
      )}

      {revealedLines === dialogues.length && dialogues.length > 0 && (
        <div style={{
          textAlign: 'center',
          padding: 'var(--space-lg)',
          animation: 'scaleIn 500ms ease',
        }}>
          <p style={{ fontSize: 'var(--fs-xl)', marginBottom: 'var(--space-sm)' }}>
            🎉 Diálogo completo! / Dialogue complete!
          </p>
          <p className={styles.tapHint}>
            💡 Toque em qualquer frase para ver a tradução ou no 🔊
          </p>
        </div>
      )}
    </div>
  );
}

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
  const [revealedTranslations, setRevealedTranslations] = useState<Set<number>>(new Set());

  const speak = (text: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger translation toggle
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Get available voices
      let voices = window.speechSynthesis.getVoices();
      
      // 1. Prioritize High-Quality / Natural Online voices (Edge/Chrome)
      const highQualityPatterns = [
        'Natural',     // Edge Online voices
        'Online',      // Other online voices
        'Google US',   // Chrome high-quality
        'Premium'      // macOS high-quality
      ];

      // 2. Prioritize specifically American English (en-US)
      let selectedVoice = voices.find(v => 
        v.lang === 'en-US' && highQualityPatterns.some(p => v.name.includes(p))
      );

      // 3. Fallback to specific female voices known for quality
      if (!selectedVoice) {
        const preferredNames = ['Samantha', 'Aria', 'Jenny', 'Zira', 'Victoria'];
        selectedVoice = voices.find(v => 
          v.lang.startsWith('en') && preferredNames.some(n => v.name.includes(n))
        );
      }

      // 4. Final fallback to any en-US voice
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang === 'en-US');
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.lang = 'en-US';
      
      const isNatural = selectedVoice?.name.includes('Natural');
      utterance.rate = isNatural ? 0.92 : 0.82; 
      utterance.pitch = isNatural ? 1.0 : 1.05; 
      utterance.volume = 1.0;
      
      window.speechSynthesis.speak(utterance);
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
        const speaker = speakerNames[line.speaker] || { name: line.speaker, icon: '💬' };

        return (
          <div
            key={index}
            className={`${styles.bubble} ${getBubbleClass(line.speaker)}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <button 
              className={styles.audioButton} 
              onClick={(e) => speak(line.english, e)}
              title="Ouça a pronúncia / Listen to pronunciation"
            >
              🔊
            </button>
            <div className={styles.speakerLabel}>
              <span>{speaker.icon}</span>
              <span>{speaker.name}</span>
            </div>
            <div className={styles.english}>{line.english}</div>
            
            <div style={{ marginTop: '8px' }}>
              {revealedTranslations.has(index) ? (
                <div
                  className={`${styles.portuguese} ${styles.portugueseVisible}`}
                  onClick={(e) => { e.stopPropagation(); toggleTranslation(index); }}
                  style={{ cursor: 'pointer' }}
                  title="Ocultar Tradução"
                >
                  {line.portuguese}
                </div>
              ) : (
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleTranslation(index); }}
                  style={{ 
                    background: 'transparent', border: '1px dashed var(--border-color)', borderRadius: '4px',
                    color: 'var(--text-light)', fontSize: '0.8rem', cursor: 'pointer', padding: '4px 8px' 
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = '#f1f5f9';
                    (e.target as HTMLElement).style.borderColor = 'var(--primary)';
                    (e.target as HTMLElement).style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = 'transparent';
                    (e.target as HTMLElement).style.borderColor = 'var(--border-color)';
                    (e.target as HTMLElement).style.color = 'var(--text-light)';
                  }}
                >
                  Tradução
                </button>
              )}
            </div>
          </div>
        );
      })}

      {dialogues.length > 0 && (
        <div style={{
          textAlign: 'center',
          padding: 'var(--space-lg)',
        }}>
          <p className={styles.tapHint}>
            💡 Ouça a pronúncia clicando no 🔊 ou clique em "Tradução" se precisar de ajuda.
          </p>
        </div>
      )}
    </div>
  );
}

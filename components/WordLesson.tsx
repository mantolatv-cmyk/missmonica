'use client';

import { useState } from 'react';
import { VocabularyItem } from '@/data/scenarios';
import styles from './WordLesson.module.css';

interface WordLessonProps {
  vocabulary: VocabularyItem[];
  level: 'A1' | 'A2';
  onComplete?: () => void;
}

export default function WordLesson({ vocabulary, level, onComplete }: WordLessonProps) {
  const [isFinished, setIsFinished] = useState(false);
  const [revealedWords, setRevealedWords] = useState<Set<number>>(new Set());
  const [notes, setNotes] = useState<Record<number, string>>({});

  const handleNoteChange = (index: number, val: string) => {
    setNotes(prev => ({ ...prev, [index]: val }));
  };

  const toggleReveal = (index: number) => {
    const newSet = new Set(revealedWords);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setRevealedWords(newSet);
  };

  if (!vocabulary || vocabulary.length === 0) return null;

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishedContainer}>
          <div className={styles.finishedIcon}>🎉</div>
          <h2 className={styles.title}>Aula Concluída!</h2>
          <p className={styles.subtitle} style={{ marginBottom: 'var(--space-xl)' }}>
            Você revisou o vocabulário. Agora é hora de testar seus conhecimentos!
          </p>
          <div className={styles.controls}>
            <button className={`${styles.button} ${styles.prevButton}`} onClick={() => setIsFinished(false)}>
              Revisar Novamente
            </button>
            <button className={`${styles.button} ${styles.nextButton}`} onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
               if (onComplete) onComplete();
            }}>
              Ir para os Jogos 🎮
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.vocabTable}>
          <thead>
            <tr>
              <th>Vocabulário</th>
              <th>Tradução</th>
              <th>Exemplo na Prática</th>
            </tr>
          </thead>
          <tbody>
            {vocabulary.map((word, index) => {
              const sentenceEn = level === 'A1' ? word.sentenceA1 : word.sentenceA2;
              const sentencePt = level === 'A1' ? word.sentenceA1Pt : word.sentenceA2Pt;

              return (
                <tr key={index}>
                  <td>
                    <span className={styles.englishText}>{word.english}</span>
                    <input 
                      type="text" 
                      placeholder="Anotação..." 
                      value={notes[index] || ''} 
                      onChange={(e) => handleNoteChange(index, e.target.value)}
                      className={styles.noteInput}
                    />
                  </td>
                  <td>
                    {revealedWords.has(index) ? (
                      <span className={styles.portugueseText} onClick={() => toggleReveal(index)} style={{cursor: 'pointer'}} title="Ocultar Tradução">
                        {word.portuguese}
                      </span>
                    ) : (
                      <button className={styles.revealBtn} onClick={() => toggleReveal(index)}>
                        Tradução
                      </button>
                    )}
                  </td>
                  <td>
                    {sentenceEn ? (
                      <>
                        <p className={styles.sentenceEn}>{sentenceEn}</p>
                        {revealedWords.has(index) && (
                          <p className={styles.sentencePt}>{sentencePt}</p>
                        )}
                      </>
                    ) : (
                      <span className={styles.portugueseText}>-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.bottomControls}>
        <button 
          className={`${styles.button} ${styles.finishButton}`} 
          onClick={() => setIsFinished(true)}
        >
          Concluir Revisão ✨
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { SimulationTask } from '@/data/scenarios';
import styles from './SimulationPractice.module.css';

interface SimulationPracticeProps {
  tasks: SimulationTask[];
}

export default function SimulationPractice({ tasks }: SimulationPracticeProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [isFinished, setIsFinished] = useState(false);

  if (!tasks || tasks.length === 0) {
    return <div className={styles.empty}>Nenhuma simulação disponível para este cenário.</div>;
  }

  const handleTextChange = (index: number, text: string) => {
    setAnswers(prev => ({ ...prev, [index]: text }));
  };

  const toggleReveal = (index: number) => {
    const newSet = new Set(revealed);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setRevealed(newSet);
  };

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishedContainer}>
          <div className={styles.finishedIcon}>🏆</div>
          <h2 className={styles.title}>Simulação Concluída!</h2>
          <p className={styles.subtitle}>
            Você passou por todas as etapas dessa experiência real.
          </p>
          <button className={styles.resetButton} onClick={() => {
            setIsFinished(false);
            setAnswers({});
            setRevealed(new Set());
          }}>
            Repetir Simulação 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>🎬 Simulação Real</h2>
      <p className={styles.introText}>
        Viva uma experiência real. Leia as instruções e escreva como você falaria em inglês.
        Depois, veja a sugestão de resposta para comparar!
      </p>

      <div className={styles.taskList}>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCard}>
            <div className={styles.taskHeader}>
              <span className={styles.taskNumber}>Passo {index + 1}</span>
              <p className={styles.promptPt}>{task.promptPt}</p>
            </div>
            
            <div className={styles.inputArea}>
              <textarea
                className={styles.textarea}
                placeholder="Escreva sua frase em inglês aqui..."
                value={answers[index] || ''}
                onChange={(e) => handleTextChange(index, e.target.value)}
                rows={2}
              />
            </div>

            <div className={styles.actionArea}>
              {!revealed.has(index) ? (
                <button className={styles.revealBtn} onClick={() => toggleReveal(index)}>
                  💡 Ver sugestão
                </button>
              ) : (
                <div className={styles.suggestionBox}>
                  <p className={styles.suggestionLabel}>Sugestão:</p>
                  <p className={styles.suggestionText}>{task.expectedEn}</p>
                  <button className={styles.hideBtn} onClick={() => toggleReveal(index)}>
                    Ocultar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottomControls}>
        <button 
          className={styles.finishButton} 
          onClick={() => {
            setIsFinished(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Finalizar Simulação ✨
        </button>
      </div>
    </div>
  );
}

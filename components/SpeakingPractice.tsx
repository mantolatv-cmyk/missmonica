'use client';

import { useState } from 'react';
import { SpeakingQuestion } from '@/data/scenarios';
import styles from './SpeakingPractice.module.css';

interface SpeakingPracticeProps {
  questions: SpeakingQuestion[];
  level: 'A1' | 'A2';
  onComplete?: () => void;
  onClose?: () => void;
}

export default function SpeakingPractice({ questions, level, onComplete, onClose }: SpeakingPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <p>Nenhuma pergunta de fala disponível para este cenário no momento.</p>
          {onClose && (
            <button 
              onClick={onClose} 
              style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', background: '#333', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ⬅️ Voltar ao Menu de Jogos
            </button>
          )}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  
  const questionEn = (level === 'A1' ? currentQuestion.questionA1 : currentQuestion.questionA2) || currentQuestion.question;
  const questionPt = (level === 'A1' ? currentQuestion.questionA1Pt : currentQuestion.questionA2Pt) || currentQuestion.questionPt;
  const hint = level === 'A1' ? currentQuestion.hintA1 : currentQuestion.hintA2;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowTranslation(false);
      setShowHint(false);
    } else {
      setIsFinished(true);
      if (onComplete) onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowTranslation(false);
      setShowHint(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFinished(false);
    setShowTranslation(false);
    setShowHint(false);
  };

  if (isFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishedContainer}>
          <div className={styles.finishedIcon}>🎉</div>
          <h2 className={styles.title}>Prática Concluída!</h2>
          <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
            Excelente! Você completou suas perguntas de conversação.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className={styles.actionBtn} onClick={handleRestart}>
              Tentar Novamente
            </button>
            {onClose && (
              <button className={styles.navBtn} onClick={onClose}>
                Voltar aos Jogos
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>🗣️ Prática de Fala</h2>
        <p className={styles.subtitle}>Leia a pergunta em voz alta e responda usando o que aprendeu.</p>
      </div>

      <div className={styles.card}>
        <p className={styles.questionEn}>{questionEn}</p>
        
        {showTranslation && (
          <div className={styles.translationBox}>
            <p className={styles.questionPt}>🇧🇷 {questionPt}</p>
          </div>
        )}

        {showHint && hint && (
          <div className={styles.hintBox}>
            <div className={styles.hintTitle}>💡 Dica de Resposta</div>
            <p className={styles.hintText}>{hint}</p>
          </div>
        )}

        <div className={styles.actionButtons}>
          <button 
            className={styles.actionBtn} 
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? 'Ocultar Tradução' : 'Ver Tradução'}
          </button>
          
          {hint && (
            <button 
              className={styles.actionBtn} 
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? 'Ocultar Dica' : 'Ver Dica de Resposta'}
            </button>
          )}
        </div>
      </div>

      <div className={styles.navControls}>
        <button 
          className={styles.navBtn} 
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ← Anterior
        </button>
        <span className={styles.progress}>
          {currentIndex + 1} / {questions.length}
        </span>
        <button 
          className={styles.navBtn} 
          onClick={handleNext}
        >
          {currentIndex === questions.length - 1 ? 'Concluir ✨' : 'Próxima →'}
        </button>
      </div>
      
      {onClose && (
        <button className={styles.actionBtn} onClick={onClose} style={{ marginTop: '1rem', border: 'none', textDecoration: 'underline' }}>
          Voltar ao Menu
        </button>
      )}
    </div>
  );
}

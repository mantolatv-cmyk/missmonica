'use client';

import React, { useState } from 'react';
import styles from './ReadingPractice.module.css';
import { ReadingComprehension } from '@/data/scenarios';

interface ReadingPracticeProps {
  reading: ReadingComprehension | undefined;
  level: 'A1' | 'A2';
  onClose?: () => void;
}

export default function ReadingPractice({ reading, level, onClose }: ReadingPracticeProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!reading) {
    return (
      <div className={styles.container}>
        <div className={styles.textPanel}>
          <p style={{textAlign: 'center'}}>Nenhum texto de leitura disponível para este cenário no momento.</p>
          {onClose && (
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button 
                onClick={onClose} 
                style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', background: '#333', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                ⬅️ Voltar ao Menu de Jogos
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const textEn = level === 'A1' ? reading.textA1 : reading.textA2;
  const textPt = level === 'A1' ? reading.textA1Pt : reading.textA2Pt;
  const questions = level === 'A1' ? reading.questionsA1 : reading.questionsA2;
  
  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return; // Prevent clicking again

    setSelectedOption(idx);
    const correct = idx === currentQuestion.correctIndex;
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>📖 Reading Comprehension</h2>
      </div>

      <div className={styles.layout}>
        {/* Left Side: Story Text */}
        <div className={styles.textPanel}>
          <p className={styles.textEn}>{textEn}</p>
          
          <button 
            className={styles.actionBtn} 
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? 'Ocultar Tradução' : 'Ver Tradução'}
          </button>

          {showTranslation && (
            <div className={styles.translationBox}>
              <p className={styles.textPt}>🇧🇷 {textPt}</p>
            </div>
          )}
        </div>

        {/* Right Side: Questions / Quiz */}
        <div className={styles.quizPanel}>
          {!isFinished ? (
            <div className={styles.questionCard}>
              <span className={styles.progress}>
                Pergunta {currentIndex + 1} de {questions.length}
              </span>
              <h3 className={styles.questionTitle}>{currentQuestion.question}</h3>
              
              <div className={styles.optionsList}>
                {currentQuestion.options.map((option, idx) => {
                  let btnClass = styles.optionBtn;
                  if (selectedOption !== null) {
                    if (idx === currentQuestion.correctIndex) {
                      btnClass = `${styles.optionBtn} ${styles.correct}`;
                    } else if (idx === selectedOption) {
                      btnClass = `${styles.optionBtn} ${styles.wrong}`;
                    }
                  }

                  return (
                    <button 
                      key={idx} 
                      className={btnClass}
                      onClick={() => handleOptionClick(idx)}
                      disabled={selectedOption !== null}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div className={styles.feedbackBox}>
                  {isCorrect ? (
                    <span className={styles.feedbackCorrect}>✅ Resposta Certa!</span>
                  ) : (
                    <span className={styles.feedbackWrong}>❌ Resposta Incorreta</span>
                  )}
                  <button className={styles.navBtn} onClick={handleNext}>
                    {currentIndex < questions.length - 1 ? 'Próxima ➡️' : 'Finalizar 🏆'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.questionCard}>
              <div className={styles.finishedContainer}>
                <div className={styles.finishedIcon}>{score === questions.length ? '🌟' : '👏'}</div>
                <h3 className={styles.scoreText}>Fim do Teste!</h3>
                <p style={{marginBottom: '2rem'}}>Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> perguntas.</p>
                {onClose && (
                  <button className={styles.navBtn} onClick={onClose}>
                    Voltar ao Menu
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

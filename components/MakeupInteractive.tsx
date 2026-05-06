import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MakeupInteractive.module.css';

const steps = [
  { id: 1, name: 'Cleanser', namePt: 'Lavar o rosto', description: 'Cleanse your face to remove impurities.' },
  { id: 2, name: 'Toner', namePt: 'Tônico', description: 'Balance the pH of your skin.' },
  { id: 3, name: 'Serum', namePt: 'Serum', description: 'Apply active ingredients for specific skin needs.' },
  { id: 4, name: 'Moisturizer', namePt: 'Hidratante Facial', description: 'Hydrate your skin for a healthy look.' },
  { id: 5, name: 'Sunscreen', namePt: 'Protetor Solar', description: 'Protect your skin from UV rays.' },
  { id: 6, name: 'Primer', namePt: 'Primer', description: 'Create a smooth base for makeup.' },
  { id: 7, name: 'Foundation', namePt: 'Base', description: 'Even out your skin tone.' },
  { id: 8, name: 'Concealer', namePt: 'Corretivo', description: 'Cover dark circles and imperfections.' },
  { id: 9, name: 'Setting Powder', namePt: 'Pó facial', description: 'Set your base and remove shine.' },
  { id: 10, name: 'Contour/Bronzer', namePt: 'Contorno/Bronzer', description: 'Define your facial structure.' },
  { id: 11, name: 'Blush', namePt: 'Blush', description: 'Add a healthy flush of color.' },
  { id: 12, name: 'Highlighter', namePt: 'Iluminador', description: 'Add a glow to the high points of your face.' },
  { id: 13, name: 'Eyeshadow', namePt: 'Sombra', description: 'Define and color your eyelids.' },
  { id: 14, name: 'Eyeliner', namePt: 'Delineador', description: 'Define your lash line.' },
  { id: 15, name: 'Mascara', namePt: 'Rímel', description: 'Make your lashes look longer and thicker.' },
  { id: 16, name: 'Lipstick/Gloss', namePt: 'Batom/Gloss', description: 'Add color and shine to your lips.' },
];

export default function MakeupInteractive() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const reset = () => {
    setCurrentStep(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/face_base.png"
            alt="Base Face"
            width={400}
            height={500}
            className={styles.baseFace}
          />
          
          {/* Overlays */}
          <div className={`${styles.overlay} ${styles.glow} ${currentStep >= 2 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.moisturizer} ${currentStep >= 4 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.foundation} ${currentStep >= 7 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.concealer} ${currentStep >= 8 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.powder} ${currentStep >= 9 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.contour} ${currentStep >= 10 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.blush} ${currentStep >= 11 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.highlighter} ${currentStep >= 12 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.eyeshadow} ${currentStep >= 13 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.eyeliner} ${currentStep >= 14 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.mascara} ${currentStep >= 15 ? styles.active : ''}`} />
          <div className={`${styles.overlay} ${styles.lipstick} ${currentStep >= 16 ? styles.active : ''}`} />
          
          {/* Step animation effect (e.g. cleanser bubbles) */}
          {currentStep === 1 && <div className={styles.bubbles}>✨🧼✨</div>}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.stepInfo}>
          {currentStep === 0 ? (
            <>
              <h2 className={styles.stepTitle}>Ready to start?</h2>
              <p className={styles.stepDescription}>Follow the 16 steps of a complete skincare and makeup routine.</p>
            </>
          ) : (
            <>
              <div className={styles.stepNumber}>Step {currentStep} of 16</div>
              <h2 className={styles.stepTitle}>{steps[currentStep - 1].name}</h2>
              <p className={styles.stepTitlePt}>{steps[currentStep - 1].namePt}</p>
              <p className={styles.stepDescription}>{steps[currentStep - 1].description}</p>
            </>
          )}
        </div>

        <div className={styles.buttons}>
          <button onClick={prevStep} disabled={currentStep === 0} className={styles.btn}>
            ← Previous
          </button>
          <button onClick={reset} className={styles.btnReset}>
            Reset
          </button>
          <button onClick={nextStep} disabled={currentStep === steps.length} className={styles.btnPrimary}>
            {currentStep === 0 ? 'Start' : currentStep === steps.length ? 'Finished!' : 'Next Step →'}
          </button>
        </div>
      </div>
    </div>
  );
}

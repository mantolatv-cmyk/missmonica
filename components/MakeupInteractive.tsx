import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MakeupInteractive.module.css';

const steps = [
  { id: 1, name: 'Cleanser', namePt: 'Lavar o rosto', description: 'Cleanse your face to remove impurities. Start with a fresh canvas.' },
  { id: 2, name: 'Toner', namePt: 'Tônico', description: 'Balance your skin pH and refine pores for a smoother look.' },
  { id: 3, name: 'Serum', namePt: 'Serum', description: 'Apply a concentrated boost of vitamins and hydration.' },
  { id: 4, name: 'Moisturizer', namePt: 'Hidratante Facial', description: 'Lock in hydration for a soft, supple, and healthy glow.' },
  { id: 5, name: 'Sunscreen', namePt: 'Protetor Solar', description: 'Essential protection against UV rays. Never skip this step!' },
  { id: 6, name: 'Primer', namePt: 'Primer', description: 'Smooth out fine lines and prepare your skin for long-lasting makeup.' },
  { id: 7, name: 'Foundation', namePt: 'Base', description: 'Create an even, flawless skin tone with a lightweight base.' },
  { id: 8, name: 'Concealer', namePt: 'Corretivo', description: 'Brighten under your eyes and cover any small imperfections.' },
  { id: 9, name: 'Setting Powder', namePt: 'Pó facial', description: 'Set your makeup in place and control shine throughout the day.' },
  { id: 10, name: 'Contour/Bronzer', namePt: 'Contorno/Bronzer', description: 'Sculpt your features and add a sun-kissed warmth to your face.' },
  { id: 11, name: 'Blush', namePt: 'Blush', description: 'Add a pop of color to the apples of your cheeks for a healthy flush.' },
  { id: 12, name: 'Highlighter', namePt: 'Iluminador', description: 'Catch the light on your cheekbones, nose, and brow bone.' },
  { id: 13, name: 'Eyeshadow', namePt: 'Sombra', description: 'Add depth and color to your eyelids with soft, blended tones.' },
  { id: 14, name: 'Eyeliner', namePt: 'Delineador', description: 'Define your eyes with a precise line along the lash line.' },
  { id: 15, name: 'Mascara', namePt: 'Rímel', description: 'Lengthen and volumize your lashes for an expressive look.' },
  { id: 16, name: 'Lipstick/Gloss', namePt: 'Batom/Gloss', description: 'Finish the look with a touch of color and shine on your lips.' },
];

export default function MakeupInteractive() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/face_base.png"
            alt="Model Portrait"
            width={500}
            height={625}
            className={styles.mainImage}
            priority
          />
          
          {/* Precise Overlays using relative percentage positioning */}
          <div className={styles.overlayLayer}>
             {/* Skincare Glow */}
             <div className={`${styles.effect} ${styles.glow} ${currentStep >= 2 ? styles.active : ''}`} />
             
             {/* Foundation - Whole Face Mask */}
             <div className={`${styles.effect} ${styles.foundation} ${currentStep >= 7 ? styles.active : ''}`} />
             
             {/* Concealer */}
             <div className={`${styles.effect} ${styles.concealer} ${currentStep >= 8 ? styles.active : ''}`} />
             
             {/* Contour */}
             <div className={`${styles.effect} ${styles.contour} ${currentStep >= 10 ? styles.active : ''}`} />
             
             {/* Blush */}
             <div className={`${styles.effect} ${styles.blush} ${currentStep >= 11 ? styles.active : ''}`} />
             
             {/* Highlighter */}
             <div className={`${styles.effect} ${styles.highlighter} ${currentStep >= 12 ? styles.active : ''}`} />
             
             {/* Eyeshadow */}
             <div className={`${styles.effect} ${styles.eyeshadow} ${currentStep >= 13 ? styles.active : ''}`} />
             
             {/* Eyeliner */}
             <div className={`${styles.effect} ${styles.eyeliner} ${currentStep >= 14 ? styles.active : ''}`} />
             
             {/* Mascara */}
             <div className={`${styles.effect} ${styles.mascara} ${currentStep >= 15 ? styles.active : ''}`} />
             
             {/* Lipstick */}
             <div className={`${styles.effect} ${styles.lipstick} ${currentStep >= 16 ? styles.active : ''}`} />
          </div>

          {/* Cleanser Bubbles */}
          {currentStep === 1 && (
            <div className={styles.cleanserOverlay}>
              <div className={styles.bubble}>✨</div>
              <div className={styles.bubble}>🫧</div>
              <div className={styles.bubble}>✨</div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.stepHeader}>
          {currentStep === 0 ? (
             <div className={styles.intro}>
               <span className={styles.badge}>Módulo Interativo</span>
               <h2>Aprenda a Rotina de Beleza</h2>
               <p>Siga o passo a passo para dominar os termos de skincare e maquiagem.</p>
             </div>
          ) : (
             <div className={styles.activeStep}>
               <div className={styles.progressCounter}>Passo {currentStep} de 16</div>
               <h2 className={styles.stepName}>{steps[currentStep-1].name}</h2>
               <h3 className={styles.stepNamePt}>{steps[currentStep-1].namePt}</h3>
               <p className={styles.description}>{steps[currentStep-1].description}</p>
             </div>
          )}
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.navBtn} 
            onClick={prevStep} 
            disabled={currentStep === 0}
          >
            ← Anterior
          </button>
          <button 
            className={styles.resetBtn} 
            onClick={() => setCurrentStep(0)}
          >
            Reiniciar
          </button>
          <button 
            className={`${styles.navBtn} ${styles.primary}`} 
            onClick={nextStep} 
            disabled={currentStep === steps.length}
          >
            {currentStep === 0 ? 'Começar' : currentStep === steps.length ? 'Finalizado!' : 'Próximo →'}
          </button>
        </div>
      </div>
    </div>
  );
}

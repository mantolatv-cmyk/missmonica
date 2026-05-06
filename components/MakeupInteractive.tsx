import React, { useState } from 'react';
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

  // SVG Paths for a clean, professional face with hair
  const facePaths = {
    // Hair (Back layer)
    hairBack: "M 15,50 C 10,60 10,80 15,95 L 85,95 C 90,80 90,60 85,50 C 85,30 70,10 50,10 C 30,10 15,30 15,50 Z",
    // Skin
    skin: "M 50,15 C 32,15 18,28 18,50 C 18,72 32,88 50,88 C 68,88 82,72 82,50 C 82,28 68,15 50,15 Z",
    // Hair (Front layer - framing the face)
    hairFront: "M 15,50 C 15,30 30,10 50,10 C 70,10 85,30 85,50 C 85,60 80,70 75,75 C 80,60 80,40 70,30 C 60,20 40,20 30,30 C 20,40 20,60 25,75 C 20,70 15,60 15,50 Z",
    leftEye: "M 34,48 C 37,45 42,45 45,48 C 42,51 37,51 34,48 Z",
    rightEye: "M 55,48 C 58,45 63,45 66,48 C 63,51 58,51 55,48 Z",
    leftLid: "M 34,47 C 37,43 42,43 45,47 L 45,48 C 42,45 37,45 34,48 Z",
    rightLid: "M 55,47 C 58,43 63,43 66,47 L 66,48 C 63,45 58,45 55,48 Z",
    nose: "M 49,48 L 49,65 Q 50,68 51,65 L 51,48",
    lips: "M 42,76 Q 50,72 58,76 Q 50,83 42,76 M 42,76 Q 50,79 58,76",
    leftBrow: "M 32,41 Q 38.5,38 45,41",
    rightBrow: "M 55,41 Q 61.5,38 68,41",
  };

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <svg viewBox="0 0 100 100" className={styles.faceSvg}>
          <defs>
            <radialGradient id="skinGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fdf0e6" />
              <stop offset="100%" stopColor="#f5d5bc" />
            </radialGradient>
            
            <filter id="blurFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
            </filter>

            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d2b1f" />
              <stop offset="100%" stopColor="#1a110a" />
            </linearGradient>
          </defs>

          {/* Hair Back */}
          <path d={facePaths.hairBack} fill="url(#hairGrad)" />

          {/* 1. Base Skin */}
          <path 
            d={facePaths.skin} 
            fill={currentStep >= 7 ? '#eecba8' : 'url(#skinGradient)'} 
            className={styles.skinBase}
            style={{
              filter: currentStep >= 4 ? 'brightness(1.02) saturate(1.05)' : 'none',
              transition: 'all 0.8s ease'
            }}
          />

          {/* Skincare Glow */}
          {currentStep >= 2 && (
            <path d={facePaths.skin} fill="rgba(255,255,255,0.15)" style={{ mixBlendMode: 'overlay' }} />
          )}

          {/* 8. Concealer */}
          <g style={{ opacity: currentStep >= 8 ? 0.5 : 0, transition: 'opacity 0.5s' }}>
            <ellipse cx="39" cy="51" rx="5" ry="2.5" fill="#fff5e6" filter="url(#blurFilter)" />
            <ellipse cx="61" cy="51" rx="5" ry="2.5" fill="#fff5e6" filter="url(#blurFilter)" />
          </g>

          {/* 10. Contour */}
          <g style={{ opacity: currentStep >= 10 ? 0.35 : 0, transition: 'opacity 0.5s' }}>
            <path d="M 22,60 Q 28,68 35,63" stroke="#8d6e63" strokeWidth="4" fill="none" filter="url(#blurFilter)" />
            <path d="M 78,60 Q 72,68 65,63" stroke="#8d6e63" strokeWidth="4" fill="none" filter="url(#blurFilter)" />
            <path d="M 42,22 Q 50,20 58,22" stroke="#8d6e63" strokeWidth="3" fill="none" filter="url(#blurFilter)" />
          </g>

          {/* 11. Blush */}
          <g style={{ opacity: currentStep >= 11 ? 0.45 : 0, transition: 'opacity 0.5s' }}>
            <circle cx="32" cy="65" r="6" fill="#ffb7b2" filter="url(#blurFilter)" />
            <circle cx="68" cy="65" r="6" fill="#ffb7b2" filter="url(#blurFilter)" />
          </g>

          {/* 12. Highlighter */}
          <g style={{ opacity: currentStep >= 12 ? 0.6 : 0, transition: 'opacity 0.5s' }}>
            <ellipse cx="32" cy="58" rx="3.5" ry="1.5" fill="white" filter="url(#blurFilter)" />
            <ellipse cx="68" cy="58" rx="3.5" ry="1.5" fill="white" filter="url(#blurFilter)" />
            <ellipse cx="50" cy="60" rx="1" ry="2" fill="white" filter="url(#blurFilter)" />
          </g>

          {/* 13. Eyeshadow */}
          <g style={{ opacity: currentStep >= 13 ? 0.5 : 0, transition: 'opacity 0.5s' }}>
            <path d={facePaths.leftLid} fill="#9575cd" opacity="0.4" />
            <path d={facePaths.rightLid} fill="#9575cd" opacity="0.4" />
          </g>

          {/* 14. Eyeliner */}
          <g style={{ opacity: currentStep >= 14 ? 0.8 : 0, transition: 'opacity 0.5s' }}>
            <path d="M 34,48 Q 39.5,46.5 45,48" stroke="black" strokeWidth="0.7" fill="none" />
            <path d="M 55,48 Q 60.5,46.5 66,48" stroke="black" strokeWidth="0.7" fill="none" />
          </g>

          {/* 15. Mascara */}
          <g style={{ opacity: currentStep >= 15 ? 1 : 0, transition: 'opacity 0.5s' }}>
             <path d="M 34,48 L 33,46 M 37,47 L 36,45 M 40,47 L 40,45 M 43,47 L 44,45" stroke="black" strokeWidth="0.4" />
             <path d="M 55,48 L 54,46 M 58,47 L 57,45 M 61,47 L 61,45 M 64,48 L 65,46" stroke="black" strokeWidth="0.4" />
          </g>

          {/* Eyes Base */}
          <path d={facePaths.leftEye} fill="white" />
          <path d={facePaths.rightEye} fill="white" />
          <circle cx="39.5" cy="48" r="2.2" fill="#3d2b1f" />
          <circle cx="60.5" cy="48" r="2.2" fill="#3d2b1f" />

          {/* 16. Lipstick */}
          <path 
            d={facePaths.lips} 
            fill={currentStep >= 16 ? "#d32f2f" : "#f1a7a7"} 
            stroke="#d32f2f" 
            strokeWidth="0.15"
            style={{ transition: 'fill 0.5s' }}
          />

          {/* Hair Front (Frames face) */}
          <path d={facePaths.hairFront} fill="url(#hairGrad)" />

          {/* Brows & Nose */}
          <path d={facePaths.leftBrow} stroke="#3d2b1f" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d={facePaths.rightBrow} stroke="#3d2b1f" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d={facePaths.nose} stroke="rgba(0,0,0,0.08)" strokeWidth="0.4" fill="none" />

          {/* Cleanser Effect */}
          {currentStep === 1 && (
            <g className={styles.bubbles}>
              <circle cx="35" cy="35" r="1.5" fill="white" opacity="0.6" />
              <circle cx="65" cy="45" r="2" fill="white" opacity="0.4" />
              <circle cx="50" cy="75" r="2" fill="white" opacity="0.5" />
            </g>
          )}
        </svg>
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

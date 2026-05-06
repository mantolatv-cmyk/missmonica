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

  // Precisely calculated face proportions for the SVG (0-100 scale)
  const facePaths = {
    skin: "M 50,10 C 30,10 15,25 15,50 C 15,75 30,90 50,90 C 70,90 85,75 85,50 C 85,25 70,10 50,10 Z",
    leftEye: "M 32,45 C 35,42 40,42 43,45 C 40,48 35,48 32,45 Z",
    rightEye: "M 57,45 C 60,42 65,42 68,45 C 65,48 60,48 57,45 Z",
    leftLid: "M 32,44 C 35,40 40,40 43,44 L 43,45 C 40,42 35,42 32,45 Z",
    rightLid: "M 57,44 C 60,40 65,40 68,44 L 68,45 C 65,42 60,42 57,45 Z",
    nose: "M 48,45 L 48,65 Q 50,70 52,65 L 52,45",
    lips: "M 40,75 Q 50,70 60,75 Q 50,82 40,75 M 40,75 Q 50,78 60,75",
    leftCheek: "M 20,60 Q 30,65 35,60",
    rightCheek: "M 65,60 Q 70,65 80,60",
    leftBrow: "M 30,38 Q 37,35 44,38",
    rightBrow: "M 56,38 Q 63,35 70,38",
  };

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <svg viewBox="0 0 100 100" className={styles.faceSvg}>
          {/* Defs for gradients and filters */}
          <defs>
            <radialGradient id="skinGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fdf0e6" />
              <stop offset="100%" stopColor="#f5d5bc" />
            </radialGradient>
            
            <filter id="blurFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            </filter>

            <linearGradient id="eyeShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9b59b6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9b59b6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* 1. Base Skin */}
          <path 
            d={facePaths.skin} 
            fill="url(#skinGradient)" 
            className={styles.skinBase}
            style={{
              filter: currentStep >= 4 ? 'brightness(1.02) saturate(1.05)' : 'none',
              fill: currentStep >= 7 ? '#eecba8' : 'url(#skinGradient)',
              transition: 'all 0.8s ease'
            }}
          />

          {/* Skincare Glow (Toner/Serum) */}
          {currentStep >= 2 && (
            <path 
              d={facePaths.skin} 
              fill="rgba(255,255,255,0.15)" 
              style={{ mixBlendMode: 'overlay' }}
            />
          )}

          {/* 8. Concealer */}
          <g style={{ opacity: currentStep >= 8 ? 0.6 : 0, transition: 'opacity 0.5s' }}>
            <ellipse cx="37" cy="48" rx="6" ry="3" fill="#fff5e6" filter="url(#blurFilter)" />
            <ellipse cx="63" cy="48" rx="6" ry="3" fill="#fff5e6" filter="url(#blurFilter)" />
          </g>

          {/* 10. Contour */}
          <g style={{ opacity: currentStep >= 10 ? 0.4 : 0, transition: 'opacity 0.5s' }}>
            <path d="M 18,55 Q 25,65 32,60" stroke="#8d6e63" strokeWidth="4" fill="none" filter="url(#blurFilter)" />
            <path d="M 82,55 Q 75,65 68,60" stroke="#8d6e63" strokeWidth="4" fill="none" filter="url(#blurFilter)" />
            <path d="M 40,15 Q 50,12 60,15" stroke="#8d6e63" strokeWidth="3" fill="none" filter="url(#blurFilter)" />
          </g>

          {/* 11. Blush */}
          <g style={{ opacity: currentStep >= 11 ? 0.5 : 0, transition: 'opacity 0.5s' }}>
            <circle cx="30" cy="62" r="7" fill="#ffb7b2" filter="url(#blurFilter)" />
            <circle cx="70" cy="62" r="7" fill="#ffb7b2" filter="url(#blurFilter)" />
          </g>

          {/* 12. Highlighter */}
          <g style={{ opacity: currentStep >= 12 ? 0.7 : 0, transition: 'opacity 0.5s' }}>
            <ellipse cx="30" cy="55" rx="4" ry="2" fill="white" filter="url(#blurFilter)" />
            <ellipse cx="70" cy="55" rx="4" ry="2" fill="white" filter="url(#blurFilter)" />
            <ellipse cx="50" cy="58" rx="1.5" ry="3" fill="white" filter="url(#blurFilter)" />
          </g>

          {/* 13. Eyeshadow */}
          <g style={{ opacity: currentStep >= 13 ? 0.6 : 0, transition: 'opacity 0.5s' }}>
            <path d={facePaths.leftLid} fill="url(#eyeShadowGrad)" />
            <path d={facePaths.rightLid} fill="url(#eyeShadowGrad)" />
          </g>

          {/* 14. Eyeliner */}
          <g style={{ opacity: currentStep >= 14 ? 0.8 : 0, transition: 'opacity 0.5s' }}>
            <path d="M 32,45 Q 37,43 43,45" stroke="black" strokeWidth="0.8" fill="none" />
            <path d="M 57,45 Q 63,43 68,45" stroke="black" strokeWidth="0.8" fill="none" />
          </g>

          {/* 15. Mascara (Enhanced lashes) */}
          <g style={{ opacity: currentStep >= 15 ? 1 : 0, transition: 'opacity 0.5s' }}>
             <path d="M 32,45 L 31,43 M 35,44 L 34,42 M 38,44 L 38,42 M 41,44 L 42,42" stroke="black" strokeWidth="0.5" />
             <path d="M 57,45 L 56,43 M 60,44 L 59,42 M 63,44 L 64,42 M 67,45 L 68,43" stroke="black" strokeWidth="0.5" />
          </g>

          {/* Eyes Base */}
          <path d={facePaths.leftEye} fill="white" />
          <path d={facePaths.rightEye} fill="white" />
          <circle cx="37.5" cy="45" r="2.5" fill="#3d2b1f" />
          <circle cx="62.5" cy="45" r="2.5" fill="#3d2b1f" />

          {/* 16. Lipstick */}
          <path 
            d={facePaths.lips} 
            fill={currentStep >= 16 ? "#d32f2f" : "#f1a7a7"} 
            stroke="#d32f2f" 
            strokeWidth="0.2"
            style={{ transition: 'fill 0.5s' }}
          />

          {/* Brows & Nose (Static/Refined) */}
          <path d={facePaths.leftBrow} stroke="#3d2b1f" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d={facePaths.rightBrow} stroke="#3d2b1f" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d={facePaths.nose} stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

          {/* Cleanser Effect */}
          {currentStep === 1 && (
            <g className={styles.bubbles}>
              <circle cx="30" cy="30" r="2" fill="white" opacity="0.6" />
              <circle cx="70" cy="40" r="3" fill="white" opacity="0.4" />
              <circle cx="50" cy="70" r="2.5" fill="white" opacity="0.5" />
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

import { useState } from 'react';
import { CulturalTipData } from '@/data/scenarios';
import styles from './CulturalTip.module.css';

interface CulturalTipProps {
  tip: CulturalTipData;
  level?: 'A1' | 'A2';
}

export default function CulturalTip({ tip, level = 'A1' }: CulturalTipProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const content = level === 'A1' && tip.contentA1 ? tip.contentA1 : (level === 'A2' && tip.contentA2 ? tip.contentA2 : tip.content);
  return (
    <div className={styles.card} id="cultural-tip">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.iconBadge}>💡</div>
          <div>
            <h4 className={styles.title}>{tip.title}</h4>
            <p className={styles.titlePt}>{tip.titlePt}</p>
          </div>
        </div>
        <p className={styles.content}>
          &ldquo;{content}&rdquo;
        </p>
        <div style={{ marginTop: 'var(--space-sm)' }}>
          {showTranslation ? (
            <p 
              className={styles.contentPt} 
              onClick={() => setShowTranslation(false)}
              style={{ cursor: 'pointer', margin: 0 }}
              title="Ocultar Tradução"
            >
              {tip.contentPt}
            </p>
          ) : (
            <button 
              onClick={() => setShowTranslation(true)}
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
    </div>
  );
}

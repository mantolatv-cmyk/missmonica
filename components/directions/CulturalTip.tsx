import { CulturalTipData } from '@/data/scenarios';
import styles from './CulturalTip.module.css';

interface CulturalTipProps {
  tip: CulturalTipData;
}

export default function CulturalTip({ tip }: CulturalTipProps) {
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
          &ldquo;{tip.content}&rdquo;
        </p>
        <p className={styles.contentPt}>
          🇧🇷 {tip.contentPt}
        </p>
      </div>
    </div>
  );
}

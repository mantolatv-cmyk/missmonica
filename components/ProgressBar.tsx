import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.label}>
          <span>{label}</span>
          <span>{current}/{total} ({percentage}%)</span>
        </div>
      )}
      <div className={styles.barOuter}>
        <div
          className={styles.barInner}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}

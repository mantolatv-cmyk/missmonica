'use client';

import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  breadcrumb?: { label: string; href?: string }[];
}

export default function Header({ breadcrumb }: HeaderProps) {
  return (
    <header className={styles.header} id="app-header">
      <div className={styles.headerInner}>
        <div className={styles.navGroup}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>✈️</span>
            MinhaAula
            <span className={styles.tagline}>Inglês para Viajantes</span>
          </Link>
          <div className={styles.mainNav}>
            <Link href="/roteiros" className={styles.navLink}>
              🗺️ Roteiros
            </Link>
          </div>
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              {breadcrumb.map((crumb, i) => (
                <span key={i}>
                  {i > 0 && <span className={styles.breadcrumbSep}>/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
        </div>
        <div className={styles.langBadge}>
          EN 🇺🇸 / PT 🇧🇷
        </div>
      </div>
    </header>
  );
}

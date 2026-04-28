'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cities, CityGuide } from '@/data/cities';
import styles from './page.module.css';

function TipItem({ english, portuguese, index }: { english: string; portuguese: string; index: number }) {
  const [showPt, setShowPt] = useState(false);

  return (
    <div 
      className={`${styles.tipCard} ${showPt ? styles.tipCardTranslated : ''}`} 
      onClick={() => setShowPt(!showPt)}
      title="Clique para traduzir"
    >
      <span className={styles.tipNumber}>{index + 1}</span>
      <div className={styles.tipContent}>
        <p className={styles.tipEn}>🇺🇸 {english}</p>
        {showPt && <p className={styles.tipPt}>🇧🇷 {portuguese}</p>}
        <span className={styles.tipHint}>{showPt ? 'Ver original' : 'Clique para ver tradução'}</span>
      </div>
    </div>
  );
}

export default function RoteirosPage() {
  const [selectedCity, setSelectedCity] = useState<CityGuide | null>(null);
  const [activeTab, setActiveTab] = useState<'attractions' | 'food' | 'entertainment' | 'phrases' | 'tips'>('attractions');
  const [search, setSearch] = useState('');

  const filtered = cities.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.state.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedCity) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <button className={styles.backBtn} onClick={() => setSelectedCity(null)}>
            ⬅️ Todos os Destinos
          </button>

          {/* City Hero */}
          <div className={styles.cityHero} style={{ background: selectedCity.gradient }}>
            <div className={styles.cityHeroContent}>
              <span className={styles.cityEmoji}>{selectedCity.emoji}</span>
              <h1 className={styles.cityName}>{selectedCity.name}</h1>
              <p className={styles.cityState}>{selectedCity.state}</p>
              <p className={styles.cityTagline}>{selectedCity.taglinePt}</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className={styles.tabs}>
            {([
              { key: 'attractions', label: '🏛️ Atrações' },
              { key: 'food', label: '🍽️ Gastronomia' },
              { key: 'entertainment', label: '🎭 Entretenimento' },
              { key: 'phrases', label: '💬 Frases Úteis' },
              { key: 'tips', label: '💡 Dicas' },
            ] as const).map(tab => (
              <button
                key={tab.key}
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Attractions */}
          {activeTab === 'attractions' && (
            <div className={styles.grid}>
              {selectedCity.attractions.map((a, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon}>{a.icon}</div>
                  <h3>{a.name}</h3>
                  <p>{a.description}</p>
                  <div className={styles.tip}>
                    <span className={styles.tipLabel}>💡 Dica:</span> {a.tip}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Food */}
          {activeTab === 'food' && (
            <div className={styles.grid}>
              {selectedCity.food.map((f, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon}>{f.icon}</div>
                  <div className={styles.foodTag}>{f.type}</div>
                  <h3>{f.name}</h3>
                  <div className={styles.mustTry}>
                    <span>⭐ Must Try:</span> {f.mustTry}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Entertainment */}
          {activeTab === 'entertainment' && (
            <div className={styles.grid}>
              {selectedCity.entertainment.map((e, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon}>{e.icon}</div>
                  <h3>{e.name}</h3>
                  <p>{e.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Phrases */}
          {activeTab === 'phrases' && (
            <div className={styles.phraseList}>
              {selectedCity.phrases.map((p, i) => (
                <div key={i} className={styles.phraseCard}>
                  <span className={styles.phraseContext}>{p.context}</span>
                  <p className={styles.phraseEn}>🇺🇸 {p.english}</p>
                  <p className={styles.phrasePt}>🇧🇷 {p.portuguese}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tips */}
          {activeTab === 'tips' && (
            <div className={styles.tipsList}>
              {selectedCity.tips.map((t, i) => (
                <TipItem key={i} english={t} portuguese={selectedCity.tipsPt[i]} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <Image
          src="/images/roteiros_hero.png"
          alt="Roteiros USA"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>🗺️ Roteiros nos EUA</h1>
          <p className={styles.heroSub}>Guias turísticos, gastronômicos e de entretenimento para as principais cidades americanas</p>
        </div>
      </div>

      <div className={styles.container}>
        <Link href="/" className={styles.backBtn}>⬅️ Voltar ao Início</Link>

        {/* Search */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="🔍 Buscar cidade ou estado..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* City Grid */}
        <div className={styles.cityGrid}>
          {filtered.map(city => (
            <button
              key={city.id}
              className={styles.cityCard}
              onClick={() => { setSelectedCity(city); setActiveTab('attractions'); }}
              style={{ background: city.gradient }}
            >
              <span className={styles.cityCardEmoji}>{city.emoji}</span>
              <h2 className={styles.cityCardName}>{city.name}</h2>
              <p className={styles.cityCardState}>{city.state}</p>
              <p className={styles.cityCardTagline}>{city.taglinePt}</p>
              <span className={styles.cityCardCta}>Ver Roteiro →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

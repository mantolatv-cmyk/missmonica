'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DialogueBlock from '@/components/DialogueBlock';
import VocabMatch from '@/components/VocabMatch';
import ChatDialogueSimulator from '@/components/directions/ChatDialogueSimulator';
import DirectionalFlashcard from '@/components/directions/DirectionalFlashcard';
import CulturalTip from '@/components/directions/CulturalTip';
import SentenceBuilder from '@/components/SentenceBuilder';
import WordScramble from '@/components/WordScramble';
import { scenarios } from '@/data/scenarios';
import styles from './page.module.css';

interface ScenarioPageProps {
  params: Promise<{ id: string }>;
}

export default function ScenarioPage({ params }: ScenarioPageProps) {
  const resolvedParams = use(params);
  const scenario = scenarios.find(s => s.id === resolvedParams.id);

  if (!scenario) {
    return (
      <>
        <Header />
        <main style={{ textAlign: 'center', padding: '4rem' }}>
          <h1>Cenário não encontrado</h1>
          <p>Scenario not found.</p>
          <Link href="/" className={styles.backButton}>← Voltar / Back</Link>
        </main>
        <Footer />
      </>
    );
  }

  const isDirections = scenario.id === 'directions';

  return (
    <>
      <Header breadcrumb={[
        { label: 'Cenários', href: '/' },
        { label: scenario.titlePt },
      ]} />
      <main>
        {/* Hero */}
        <div className={styles.scenarioHero}>
          <Image
            src={scenario.imagePath}
            alt={scenario.title}
            fill
            className={styles.heroImage}
            priority
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
          <div className={styles.heroOverlay}>
            <span className={styles.heroIcon}>{scenario.icon}</span>
            <h1 className={styles.heroTitle}>{scenario.title}</h1>
            <p className={styles.heroTitlePt}>{scenario.titlePt}</p>
          </div>
        </div>

        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            ← Voltar aos Cenários / Back to Scenarios
          </Link>

          {isDirections ? (
            <DirectionsLayout scenario={scenario} />
          ) : (
            <GenericLayout scenario={scenario} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

// Generic layout for all standard scenarios
function GenericLayout({ scenario }: { scenario: typeof scenarios[0] }) {
  const hasCulturalTips = !!scenario.culturalTips && scenario.culturalTips.length > 0;
  const hasDialogueSets = !!scenario.dialogueSets && scenario.dialogueSets.length > 0;
  const [activeTab, setActiveTab] = useState<'dialogues' | 'vocabulary' | 'cultural' | 'practice'>('dialogues');
  const [activeDialogueSet, setActiveDialogueSet] = useState(0);
  const [activePracticeMode, setActivePracticeMode] = useState<'sentences' | 'scramble'>('sentences');

  return (
    <>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'dialogues' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('dialogues')}
        >
          💬 Diálogos / Dialogues
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'vocabulary' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          📚 Vocabulário / Vocabulary
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'practice' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('practice')}
        >
          🎮 Praticar / Practice
        </button>
        {hasCulturalTips && (
          <button
            className={`${styles.tab} ${activeTab === 'cultural' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('cultural')}
          >
            💡 Dicas Culturais
          </button>
        )}
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'dialogues' && (
          <>
            {hasDialogueSets ? (
              <>
                {/* Sub-navigation for multiple dialogue sets */}
                <div className={styles.sectionPills}>
                  {scenario.dialogueSets!.map((set, idx) => (
                    <button
                      key={idx}
                      className={`${styles.sectionPill} ${activeDialogueSet === idx ? styles.sectionPillActive : ''}`}
                      onClick={() => setActiveDialogueSet(idx)}
                    >
                      {set.icon} {set.titlePt}
                    </button>
                  ))}
                </div>
                <h3 className={styles.sectionTitle}>
                  {scenario.dialogueSets![activeDialogueSet].icon}{' '}
                  {scenario.dialogueSets![activeDialogueSet].title}
                </h3>
                <p className={styles.sectionSub}>
                  {scenario.dialogueSets![activeDialogueSet].titlePt}
                </p>
                <DialogueBlock
                  key={activeDialogueSet}
                  dialogues={scenario.dialogueSets![activeDialogueSet].dialogues}
                />
              </>
            ) : (
              <DialogueBlock dialogues={scenario.dialogues} />
            )}
          </>
        )}
        {activeTab === 'vocabulary' && (
          <VocabMatch vocabulary={scenario.vocabulary} />
        )}
        {activeTab === 'practice' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div className={styles.sectionPills}>
              <button
                className={`${styles.sectionPill} ${activePracticeMode === 'sentences' ? styles.sectionPillActive : ''}`}
                onClick={() => setActivePracticeMode('sentences')}
              >
                🧩 Montar Frases
              </button>
              <button
                className={`${styles.sectionPill} ${activePracticeMode === 'scramble' ? styles.sectionPillActive : ''}`}
                onClick={() => setActivePracticeMode('scramble')}
              >
                🔠 Palavra Embaralhada
              </button>
            </div>

            {activePracticeMode === 'sentences' ? (
              <SentenceBuilder 
                dialogues={hasDialogueSets ? scenario.dialogueSets![activeDialogueSet].dialogues : scenario.dialogues} 
              />
            ) : (
              <WordScramble vocabulary={scenario.vocabulary} />
            )}
          </div>
        )}
        {activeTab === 'cultural' && scenario.culturalTips && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {scenario.culturalTips.map((tip, idx) => (
              <CulturalTip key={idx} tip={tip} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// Enhanced directions layout with 3 sections
function DirectionsLayout({ scenario }: { scenario: typeof scenarios[0] }) {
  const [activeSection, setActiveSection] = useState<'simulator' | 'flashcards' | 'cultural' | 'vocabulary'>('simulator');

  const sections = [
    { key: 'simulator' as const, label: '💬 Simulador', labelEn: 'Dialogue Simulator' },
    { key: 'flashcards' as const, label: '🃏 Flashcards', labelEn: 'Directional Flashcards' },
    { key: 'cultural' as const, label: '💡 Dicas Culturais', labelEn: 'Cultural Tips' },
    { key: 'vocabulary' as const, label: '📚 Vocabulário', labelEn: 'Vocabulary Game' },
  ];

  return (
    <>
      {/* Section navigation pills */}
      <div className={styles.sectionPills}>
        {sections.map(s => (
          <button
            key={s.key}
            className={`${styles.sectionPill} ${activeSection === s.key ? styles.sectionPillActive : ''}`}
            onClick={() => setActiveSection(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeSection === 'simulator' && (
          <div className={styles.section} id="section-simulator">
            <h2 className={styles.sectionTitle}>
              💬 Simulador de Diálogo
            </h2>
            <p className={styles.sectionSub}>
              Click through the conversation between a tourist and a friendly local. Tap each message to see the Portuguese translation.
            </p>
            <ChatDialogueSimulator
              dialogues={scenario.dialogues}
              onComplete={() => {
                fetch('/api/progress', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ scenarioId: 'directions', type: 'dialogue', completed: true }),
                }).catch(() => {});
              }}
            />
          </div>
        )}

        {activeSection === 'flashcards' && scenario.flashcards && (
          <div className={styles.section} id="section-flashcards">
            <h2 className={styles.sectionTitle}>
              🃏 Flashcards de Direções
            </h2>
            <p className={styles.sectionSub}>
              Tap each card to flip and see the Portuguese translation. Learn essential directional vocabulary!
            </p>
            <DirectionalFlashcard flashcards={scenario.flashcards} />
          </div>
        )}

        {activeSection === 'cultural' && scenario.culturalTips && (
          <div className={styles.section} id="section-cultural">
            <h2 className={styles.sectionTitle}>
              💡 Dicas Culturais / Cultural Tips
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {scenario.culturalTips.map((tip, idx) => (
                <CulturalTip key={idx} tip={tip} />
              ))}
            </div>
          </div>
        )}

        {activeSection === 'vocabulary' && (
          <div className={styles.section} id="section-vocabulary">
            <h2 className={styles.sectionTitle}>
              📚 Jogo de Vocabulário
            </h2>
            <p className={styles.sectionSub}>
              Match the English words with their Portuguese translations!
            </p>
            <VocabMatch
              vocabulary={scenario.vocabulary}
              onComplete={() => {
                fetch('/api/progress', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ scenarioId: 'directions', type: 'vocabulary', completed: true }),
                }).catch(() => {});
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

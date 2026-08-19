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
import ListeningChallenge from '@/components/ListeningChallenge';
import SpeedRound from '@/components/SpeedRound';
import WordLesson from '@/components/WordLesson';
import SpeakingPractice from '@/components/SpeakingPractice';
import MakeupInteractive from '@/components/MakeupInteractive';
import ReadingPractice from '@/components/ReadingPractice';
import SimulationPractice from '@/components/SimulationPractice';
import WouldYouRatherPractice from '@/components/WouldYouRatherPractice';
import TranslationPractice from '@/components/TranslationPractice';
import ProblemSolvingPractice from '@/components/ProblemSolvingPractice';
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

          <UniversalLayout scenario={scenario} />
        </div>
      </main>
      <Footer />
    </>
  );
}

// Universal layout for all scenarios
function UniversalLayout({ scenario }: { scenario: typeof scenarios[0] }) {
  const [activeSection, setActiveSection] = useState<'wordlesson' | 'simulator' | 'simulation' | 'problems' | 'translation' | 'wouldyourather' | 'flashcards' | 'cultural' | 'vocabulary' | 'listening' | 'speed' | 'reading' | 'speaking' | 'sentences' | 'scramble' | 'makeup'>('wordlesson');
  const [level, setLevel] = useState<'A1' | 'A2'>('A1');
  const [showLevelSelector, setShowLevelSelector] = useState(true);
  const [variation, setVariation] = useState<1 | 2>(1);
  const [culturalRegion, setCulturalRegion] = useState<'US' | 'EU'>('US');
  const hasDialogueSets = !!scenario.dialogueSets && scenario.dialogueSets.length > 0;
  const [activeDialogueSet, setActiveDialogueSet] = useState(0);

  const getDialogues = () => {
    const set = hasDialogueSets ? scenario.dialogueSets![activeDialogueSet] : scenario;
    if (level === 'A1') {
      return (variation === 2 && set.dialoguesBeginner2) ? set.dialoguesBeginner2 : (set.dialoguesBeginner || set.dialogues);
    }
    return (variation === 2 && set.dialogues2) ? set.dialogues2 : set.dialogues;
  };

  const currentDialogues = getDialogues();

  const handleLevelChange = (newLevel: 'A1' | 'A2') => {
    setLevel(newLevel);
    setShowLevelSelector(false);
  };

  const LevelToggle = () => (
    <div className={styles.selectorsContainer}>
      {showLevelSelector ? (
        <div className={styles.levelSelector} style={{ marginBottom: 0 }}>
          <span className={styles.levelLabel}>Nível:</span>
          <div className={styles.levelToggle}>
            <button 
              className={`${styles.levelBtn} ${level === 'A1' ? styles.levelBtnActive : ''}`}
              onClick={() => handleLevelChange('A1')}
            >
              Nível A1
            </button>
            <button 
              className={`${styles.levelBtn} ${level === 'A2' ? styles.levelBtnActive : ''}`}
              onClick={() => handleLevelChange('A2')}
            >
              Nível A2
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.discreteLevelIndicator}>
          <span className={styles.discreteText}>
            Você está praticando o <strong>{level === 'A1' ? 'Nível A1' : 'Nível A2'}</strong>
          </span>
          <button className={styles.discreteBtn} onClick={() => setShowLevelSelector(true)}>
            ✏️ Alterar
          </button>
        </div>
      )}
      
      {activeSection === 'simulator' && (
        <div className={styles.variationSelector}>
          <div className={styles.variationToggle}>
            <button 
              className={`${styles.variationBtn} ${variation === 1 ? styles.variationBtnActive : ''}`}
              onClick={() => setVariation(1)}
            >
              Conversa A
            </button>
            <button 
              className={`${styles.variationBtn} ${variation === 2 ? styles.variationBtnActive : ''}`}
              onClick={() => setVariation(2)}
            >
              Conversa B
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const sections = [
    ...(scenario.vocabulary ? [{ key: 'wordlesson' as const, label: '📖 Vocabulário', labelEn: 'Word Lesson' }] : []),
    ...(scenario.dialogues || scenario.dialogueSets ? [{ key: 'simulator' as const, label: '💬 Diálogos', labelEn: 'Dialogues' }] : []),
    ...(scenario.simulationTasks ? [{ key: 'simulation' as const, label: '🎬 Simulação', labelEn: 'Roleplay Simulation' }] : []),
    ...(scenario.problems ? [{ key: 'problems' as const, label: '🚨 Problemas', labelEn: 'Problem Solving' }] : []),
    ...(scenario.importantPhrases ? [{ key: 'translation' as const, label: '✍️ Tradução', labelEn: 'Translation' }] : []),
    ...(scenario.wouldYouRather ? [{ key: 'wouldyourather' as const, label: '⚖️ Would You Rather', labelEn: 'Would You Rather' }] : []),
    ...(scenario.flashcards ? [{ key: 'flashcards' as const, label: '🃏 Flashcards', labelEn: 'Flashcards' }] : []),
    ...(scenario.dialogues || scenario.dialogueSets ? [{ key: 'sentences' as const, label: '🧩 Frases', labelEn: 'Sentence Builder' }] : []),
    ...(scenario.vocabulary ? [{ key: 'scramble' as const, label: '🔠 Embaralhar', labelEn: 'Word Scramble' }] : []),
    ...(scenario.reading ? [{ key: 'reading' as const, label: '📖 Reading', labelEn: 'Reading Comprehension' }] : []),
    ...(scenario.speakingQuestions ? [{ key: 'speaking' as const, label: '🗣️ Speaking', labelEn: 'Speaking Practice' }] : []),
    ...(scenario.dialogues || scenario.dialogueSets ? [{ key: 'listening' as const, label: '🎧 Listening', labelEn: 'Audio Quiz' }] : []),
    ...(scenario.vocabulary ? [{ key: 'speed' as const, label: '⚡ Speed Round', labelEn: 'Fast Vocabulary' }] : []),
    ...(scenario.culturalTips || scenario.culturalTipsEurope ? [{ key: 'cultural' as const, label: '💡 Culturais', labelEn: 'Cultural Tips' }] : []),
    ...(scenario.vocabulary ? [{ key: 'vocabulary' as const, label: '🔗 Ligar Palavras', labelEn: 'Vocabulary Match' }] : []),
    ...((scenario.id === 'shopping' || scenario.id === 'beauty') ? [{ key: 'makeup' as const, label: '💄 Makeup', labelEn: 'Makeup Interactive' }] : []),
  ];

  return (
    <>
      <LevelToggle />
      {showLevelSelector && (
        <p className={styles.levelHint}>
          {level === 'A1' ? 'Conteúdo adaptado para o nível básico.' : 'Conteúdo com vocabulário intermediário.'}
        </p>
      )}

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

        {activeSection === 'wordlesson' && (
          <div className={styles.section} id="section-wordlesson">
            <WordLesson vocabulary={scenario.vocabulary} level={level} onComplete={() => setActiveSection('simulator')} />
          </div>
        )}

        {activeSection === 'simulator' && (
          <div className={styles.section} id="section-simulator">
            {hasDialogueSets && (
              <>
                <div className={styles.sectionPills} style={{ marginBottom: '1rem', marginTop: '0', justifyContent: 'flex-start' }}>
                  {scenario.dialogueSets!.map((set, idx) => (
                    <button
                      key={idx}
                      className={`${styles.sectionPill} ${activeDialogueSet === idx ? styles.sectionPillActive : ''}`}
                      onClick={() => setActiveDialogueSet(idx)}
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
                    >
                      {set.icon} {set.titlePt}
                    </button>
                  ))}
                </div>
                <h3 className={styles.sectionTitle} style={{ marginTop: '0' }}>
                  {scenario.dialogueSets![activeDialogueSet].icon} {scenario.dialogueSets![activeDialogueSet].title}
                </h3>
                <p className={styles.sectionSub}>
                  {scenario.dialogueSets![activeDialogueSet].titlePt}
                </p>
              </>
            )}
            {!hasDialogueSets && (
              <h2 className={styles.sectionTitle}>
                💬 Diálogos
              </h2>
            )}
            <DialogueBlock
              key={`dialogues-${level}-${variation}-${activeDialogueSet}`}
              dialogues={currentDialogues}
            />
          </div>
        )}

        {activeSection === 'simulation' && scenario.simulationTasks && (
          <div className={styles.section} id="section-simulation">
            <SimulationPractice tasks={scenario.simulationTasks} />
          </div>
        )}
        
        {activeSection === 'problems' && scenario.problems && (
          <div className={styles.section} id="section-problems">
            <ProblemSolvingPractice problems={scenario.problems} />
          </div>
        )}

        {activeSection === 'translation' && scenario.importantPhrases && (
          <div className={styles.section} id="section-translation">
            <TranslationPractice phrases={scenario.importantPhrases} />
          </div>
        )}
        
        {activeSection === 'wouldyourather' && scenario.wouldYouRather && (
          <div className={styles.section} id="section-wouldyourather">
            <WouldYouRatherPractice questions={scenario.wouldYouRather} />
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
        {activeSection === 'sentences' && (
          <div className={styles.section} id="section-sentences">
            <h2 className={styles.sectionTitle}>🧩 Montar Frases</h2>
            <SentenceBuilder 
              key={`sentences-${level}`}
              dialogues={currentDialogues} 
            />
          </div>
        )}

        {activeSection === 'scramble' && (
          <div className={styles.section} id="section-scramble">
            <h2 className={styles.sectionTitle}>🔠 Embaralhar Palavras</h2>
            <WordScramble vocabulary={scenario.vocabulary} />
          </div>
        )}

        {activeSection === 'makeup' && (
          <div className={styles.section} id="section-makeup">
            <h2 className={styles.sectionTitle}>💄 Makeup Interactive</h2>
            <MakeupInteractive />
          </div>
        )}


        {activeSection === 'reading' && (
          <div className={styles.section} id="section-reading">
            <ReadingPractice 
              key={`reading-${level}`}
              reading={scenario.reading}
              level={level}
              onClose={() => setActiveSection('wordlesson')}
            />
          </div>
        )}

        {activeSection === 'speaking' && (
          <div className={styles.section} id="section-speaking">
            <SpeakingPractice 
              key={`speaking-${level}`}
              questions={scenario.speakingQuestions || []}
              level={level}
              onClose={() => setActiveSection('wordlesson')}
            />
          </div>
        )}

        {activeSection === 'listening' && (
          <div className={styles.section} id="section-listening">
            <h2 className={styles.sectionTitle}>🎧 Desafio de Audição</h2>
            <ListeningChallenge key={`listening-${level}-${variation}`} dialogues={currentDialogues} />
          </div>
        )}

        {activeSection === 'speed' && (
          <div className={styles.section} id="section-speed">
            <h2 className={styles.sectionTitle}>⚡ Speed Round</h2>
            <SpeedRound vocabulary={scenario.vocabulary} />
          </div>
        )}

        {activeSection === 'cultural' && (scenario.culturalTips || scenario.culturalTipsEurope) && (
          <div className={styles.section} id="section-cultural">
            <h2 className={styles.sectionTitle}>
              💡 Dicas Culturais / Cultural Tips
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div className={styles.variationSelector} style={{ marginBottom: 'var(--space-sm)' }}>
                <div className={styles.variationToggle}>
                  <button 
                    className={`${styles.variationBtn} ${culturalRegion === 'US' ? styles.variationBtnActive : ''}`}
                    onClick={() => setCulturalRegion('US')}
                  >
                    🇺🇸🇨🇦 EUA / Canadá
                  </button>
                  <button 
                    className={`${styles.variationBtn} ${culturalRegion === 'EU' ? styles.variationBtnActive : ''}`}
                    onClick={() => setCulturalRegion('EU')}
                  >
                    🇪🇺 Europa
                  </button>
                </div>
              </div>
              {(culturalRegion === 'US' ? scenario.culturalTips : (scenario.culturalTipsEurope || scenario.culturalTips))?.map((tip, idx) => (
                <CulturalTip key={idx} tip={tip} level={level} />
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

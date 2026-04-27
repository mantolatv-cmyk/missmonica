// ============================================
// MinhaAula – Shared Vocabulary Bank
// ============================================

import { VocabularyItem } from './scenarios';

export interface VocabularyCategory {
  category: string;
  categoryPt: string;
  icon: string;
  items: VocabularyItem[];
}

export const vocabularyBank: VocabularyCategory[] = [
  {
    category: "Greetings & Basics",
    categoryPt: "Saudações e Básico",
    icon: "👋",
    items: [
      { english: "Hello", portuguese: "Olá" },
      { english: "Good morning", portuguese: "Bom dia" },
      { english: "Good afternoon", portuguese: "Boa tarde" },
      { english: "Good evening", portuguese: "Boa noite" },
      { english: "Please", portuguese: "Por favor" },
      { english: "Thank you", portuguese: "Obrigado(a)" },
      { english: "You're welcome", portuguese: "De nada" },
      { english: "Excuse me", portuguese: "Com licença" },
      { english: "Sorry", portuguese: "Desculpe" },
      { english: "Yes", portuguese: "Sim" },
      { english: "No", portuguese: "Não" },
    ],
  },
  {
    category: "Numbers & Money",
    categoryPt: "Números e Dinheiro",
    icon: "💵",
    items: [
      { english: "One", portuguese: "Um" },
      { english: "Two", portuguese: "Dois" },
      { english: "Three", portuguese: "Três" },
      { english: "Five", portuguese: "Cinco" },
      { english: "Ten", portuguese: "Dez" },
      { english: "Twenty", portuguese: "Vinte" },
      { english: "How much?", portuguese: "Quanto custa?" },
      { english: "Dollar", portuguese: "Dólar" },
      { english: "Change", portuguese: "Troco" },
      { english: "Credit card", portuguese: "Cartão de crédito" },
    ],
  },
  {
    category: "Emergency",
    categoryPt: "Emergência",
    icon: "🆘",
    items: [
      { english: "Help!", portuguese: "Socorro!" },
      { english: "I need a doctor", portuguese: "Preciso de um médico" },
      { english: "Where is the hospital?", portuguese: "Onde é o hospital?" },
      { english: "Call the police", portuguese: "Chame a polícia" },
      { english: "I'm lost", portuguese: "Estou perdido(a)" },
      { english: "I don't understand", portuguese: "Eu não entendo" },
      { english: "Do you speak Portuguese?", portuguese: "Você fala português?" },
      { english: "Can you help me?", portuguese: "Você pode me ajudar?" },
    ],
  },
];

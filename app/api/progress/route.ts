import { NextResponse } from 'next/server';

// In-memory progress store (demo purposes)
interface ProgressEntry {
  scenarioId: string;
  type: 'dialogue' | 'vocabulary' | 'flashcard';
  completed: boolean;
  timestamp: string;
}

const progressStore: ProgressEntry[] = [];

export async function GET() {
  const summary = {
    totalCompleted: progressStore.filter(p => p.completed).length,
    entries: progressStore,
    scenarios: {
      introduction: progressStore.filter(p => p.scenarioId === 'introduction'),
      numbers: progressStore.filter(p => p.scenarioId === 'numbers'),
      airport: progressStore.filter(p => p.scenarioId === 'airport'),
      hotel: progressStore.filter(p => p.scenarioId === 'hotel'),
      restaurant: progressStore.filter(p => p.scenarioId === 'restaurant'),
      directions: progressStore.filter(p => p.scenarioId === 'directions'),
      transport: progressStore.filter(p => p.scenarioId === 'transport'),
      medical: progressStore.filter(p => p.scenarioId === 'medical'),
      entertainment: progressStore.filter(p => p.scenarioId === 'entertainment'),
      cafe: progressStore.filter(p => p.scenarioId === 'cafe'),
      tech: progressStore.filter(p => p.scenarioId === 'tech'),
      smalltalk: progressStore.filter(p => p.scenarioId === 'smalltalk'),
      slangs: progressStore.filter(p => p.scenarioId === 'slangs'),
    },
  };

  return NextResponse.json(summary);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const entry: ProgressEntry = {
      scenarioId: body.scenarioId || 'unknown',
      type: body.type || 'dialogue',
      completed: body.completed || false,
      timestamp: new Date().toISOString(),
    };

    progressStore.push(entry);

    return NextResponse.json({
      success: true,
      message: 'Progress saved!',
      entry,
      total: progressStore.length,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 }
    );
  }
}

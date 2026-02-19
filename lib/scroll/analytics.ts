import { ChapterEvent } from './types';

export function trackEvent(event: ChapterEvent): void {
  // Base de observabilidade local e não invasiva para o MVP.
  console.log('[scroll-event]', event);
}

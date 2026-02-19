export type ChapterId =
  | 'hook'
  | 'problemas'
  | 'metodo'
  | 'cases'
  | 'credibilidade'
  | 'conversao';

export type ChapterCTA = {
  label: string;
  href: string;
};

export type ChapterConfig = {
  id: ChapterId;
  title: string;
  startMarker: string;
  endMarker: string;
  enablePin: boolean;
  ctas: ChapterCTA[];
  analyticsKey: string;
};

export type ChapterEvent = {
  type: 'chapter_enter' | 'chapter_exit' | 'case_open';
  key: string;
  timestamp: number;
};

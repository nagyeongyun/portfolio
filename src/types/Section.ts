import { ReactNode } from 'react';

export interface SectionProps {
  title: string;
  sub: string;
  content: string;
  startDate: string;
  endDate: string;
}

export interface SectionContentProps {
  content: ReactNode;
  click?: boolean;
}

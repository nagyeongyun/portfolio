import { ReactNode } from 'react';

export interface SectionSubTitleProps {
  title: string;
  sub: string;
  content: string;
  startDate: string;
  endDate: string;
}

export interface SectionContentProps {
  content: ReactNode;
  click?: () => void;
}

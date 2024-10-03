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

export interface PreviewBoxProps {
  projectId: number;
  img: string[];
  title: string;
  content: string[];
  skill: string[];
  url: string;
}

export interface TagProps {
  skill: string[];
}

export interface SkillDetail {
  [key: string]: string[];
}

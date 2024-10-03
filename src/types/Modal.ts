// export interface ModalProps {
//   title: string;
//   subTitle: string;
//   duration: string;
//   team: string[];
//   techStack: string[];
//   development: string[];
// }

import { RefObject } from 'react';

export interface ModalProps {
  projectId: number;
  toggleModal: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export interface ProjectDetailProps {
  title: string;
  subTitle: string;
  duration: string;
  team: string[];
  images: string[];
  keyFeatures: {
    feature: string;
    detail: string[];
  }[];
  techStack: {
    tech: string;
    reason: string[];
  }[];
  contributions: {
    [key: string]: {
      image: string;
      details: {
        contribution: string;
        detail: string[];
      }[];
    };
  };
  collaboration: {
    feature: string;
    detail: string[];
  }[];
}

export interface ImgModalProps {
  img: string;
  toggleModal: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

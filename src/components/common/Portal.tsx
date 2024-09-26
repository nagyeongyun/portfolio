import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: ReactNode }) => {
  const modalRoot = document.getElementById('modal-portal') as HTMLElement;

  return createPortal(children, modalRoot);
};

export default Portal;

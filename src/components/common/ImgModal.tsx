import { useEffect, useRef } from 'react';
import Portal from './Portal';
import { ReactComponent as DeleteBtn } from '../../assets/icon/delete-btn.svg';
import { ImgModalProps } from 'types/Modal';

const ImgModal = ({ img, toggleModal }: ImgModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-70">
        <div className="relative" ref={modalRef}>
          <img
            src={img}
            alt="모달 이미지"
            className="max-w-full max-h-full border border-slate-200"
          />
          <DeleteBtn
            onClick={toggleModal}
            className="absolute top-2 right-2 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </Portal>
  );
};

export default ImgModal;

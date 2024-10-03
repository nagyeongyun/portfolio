import { useState, useEffect, useRef } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : 'auto';
    if (isOpenModal) document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenModal]);

  return {
    isOpenModal,
    toggleModal,
    modalRef,
  };
};

export default useModal;

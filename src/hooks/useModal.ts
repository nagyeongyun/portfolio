import { useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return {
    isOpenModal,
    toggleModal,
  };
};

export default useModal;

import Portal from './Portal';
import useModal from 'hooks/useModal';
import { ReactComponent as DeleteBtn } from '../../assets/icon/delete-btn.svg';
import { ImgModalProps } from 'types/Modal';

const ImgModal = ({ img, toggleModal, modalRef }: ImgModalProps) => {
  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-70">
        <div className="relative" ref={modalRef}>
          <img
            src={img}
            alt="img modal"
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

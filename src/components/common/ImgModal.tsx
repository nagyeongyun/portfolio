import { useState, useEffect } from 'react';
import Portal from './Portal';
import { ReactComponent as DeleteBtn } from '../../assets/icon/delete-btn.svg';
import { ImgModalProps } from 'types/Modal';
import { LoadingIcon } from './LoadingIcon';

const ImgModal = ({ img, toggleModal, modalRef }: ImgModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = img;

    imageLoader.onload = () => {
      setLoading(false);
    };

    return () => {
      imageLoader.onload = null;
    };
  }, [img]);

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-70">
        <div className="relative" ref={modalRef}>
          {loading ? (
            <div className="p-28">
              <LoadingIcon />
            </div>
          ) : (
            <>
              <img
                src={img}
                alt="img modal"
                className="w-full max-w-[70vw] max-h-[60vh] md:max-w-full md:max-h-full border border-slate-200"
                onLoad={() => setLoading(false)}
              />
              <DeleteBtn
                onClick={toggleModal}
                className="absolute top-2 right-2 cursor-pointer hover:opacity-80"
              />
            </>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default ImgModal;

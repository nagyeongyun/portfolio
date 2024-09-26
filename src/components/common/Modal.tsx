import Portal from './Portal';

const Modal = () => {
  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-24 h-24 border-2 text-black text-24 p-4">
          <p>모달 내용</p>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

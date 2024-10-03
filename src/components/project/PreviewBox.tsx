import { PreviewBoxProps } from 'types/Section';
import Modal from 'components/common/Modal';
import Tag from 'components/common/Tag';
import useModal from 'hooks/useModal';

const PreviewBox = ({
  projectId,
  img,
  title,
  content,
  skill,
  url,
}: PreviewBoxProps) => {
  const { isOpenModal, toggleModal, modalRef } = useModal();

  const clickShowModal = () => {
    toggleModal();
  };

  return (
    <div className="flex flex-col bg-zinc-700 h-auto transition-transform duration-300 ease-in-out hover:scale-[1.02]">
      <div
        className="relative max-w-full h-[14.5rem] bg-cover"
        style={{
          backgroundImage: `url(${img[1]})`,
          backgroundPosition: '47% 20%',
        }}
      >
        <img
          src={img[0]}
          alt="프로젝트 로고"
          className="absolute bottom-3 right-3 h-10"
        />
      </div>
      <div className="flex-1 flex-col px-5 py-4">
        <div>
          <p className="font-Pretendard-200 text-[1.7rem] mb-2">{title}</p>
          <p className="text-[1rem] text-zinc-200 mb-1.5">{content[0]}</p>
          <p className="text-[1rem] text-zinc-200 leading-[1.4rem]">
            {content[1]}
          </p>
        </div>
        <div className="space-y-5 mt-7">
          <Tag skill={skill} />
          <div className="flex space-x-3 text-center text-zinc-200 text-[0.85rem]">
            <div
              onClick={clickShowModal}
              className="flex-1 py-2 border border-zinc-500 cursor-pointer hover:bg-zinc-600"
            >
              자세히 보기
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 border border-zinc-500 cursor-pointer hover:bg-zinc-600"
            >
              Github 바로가기
            </a>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal
          projectId={projectId}
          toggleModal={toggleModal}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

export default PreviewBox;

import SectionTitle from '../components/section/SectionTitle';
import SectionSubTitle from '../components/section/SectionSubTitle';
import SectionContent from '../components/section/SectionContent';
import AwardImg from '../assets/img/award.svg';
import ImgModal from 'components/common/ImgModal';
import useModal from 'hooks/useModal';

const Education = () => {
  const { isOpenModal, toggleModal, modalRef } = useModal();

  const content = (
    <>
      AI 웹 서비스 프로젝트 III{' '}
      <strong className="font-Pretendard-100">대상</strong>
    </>
  );

  const clickShowImg = () => {
    toggleModal();
  };

  return (
    <>
      <SectionTitle title="Education" />
      <div className="flex flex-col md:flex-row">
        <div className="flex-none md:pr-[12rem] md:mb-0 mb-4">
          <SectionSubTitle
            title="엘리스 AI 웹 풀스택 트랙"
            sub="10th"
            content="IT 부트캠프 Elice"
            startDate="2024.03"
            endDate="2024.08"
          />
        </div>
        <div className="flex-1 space-y-1">
          <SectionContent content="JavaScript, React, Node.js, 딥러닝 기초 학습" />
          <SectionContent content={content} click={clickShowImg} />
        </div>
      </div>
      {isOpenModal && (
        <ImgModal
          img={AwardImg}
          toggleModal={toggleModal}
          modalRef={modalRef}
        />
      )}
      <div>
        <p className="font-Pretendard-200 text-[1.1rem] md:text-[1.2rem]  mt-9">
          덕성여자대학교
          <span className="ml-3 text-[0.8rem] md:text-[1rem] text-zinc-400 font-Pretendard-100">
            학사
          </span>
        </p>
        <p className="whitespace-pre mt-1.5 text-[0.8rem] md:text-[1rem] text-zinc-400">
          일어일문학과(주전공){' '}
          <span className="ml-1.5">IT미디어공학과(복수전공)</span>
          <p className="text-[0.7rem] md:text-[0.9rem] mt-0.5">
            2018.03 - 2023.08 ㅣ<span className="ml-1">졸업</span>
          </p>
        </p>
      </div>
    </>
  );
};

export default Education;

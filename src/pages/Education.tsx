import SectionTitle from '../components/common/SectionTitle';
import SectionSubTitle from '../components/common/SectionSubTitle';
import SectionContent from '../components/common/SectionContent';

const Education = () => {
  return (
    <>
      <SectionTitle title="Education" />
      <div className="flex">
        <div className="flex-none pr-[10rem]">
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
          <SectionContent content="AI 웹 서비스 프로젝트 III 대상" />
        </div>
      </div>
      <div>
        <p className="font-Pretendard-200 text-[1.2rem] mt-9">
          덕성여자대학교
          <span className="ml-3 text-[1rem] text-zinc-400 font-Pretendard-100">
            학사
          </span>
        </p>
        <p className="whitespace-pre mt-1.5 text-[1rem] text-zinc-400">
          일어일문학과(주전공){' '}
          <span className="ml-1.5">IT미디어공학과(복수전공)</span>
          <p className="text-[0.9rem] mt-0.5">
            2018.03 - 2023.08 ㅣ<span className="ml-1">졸업</span>
          </p>
        </p>
      </div>
    </>
  );
};

export default Education;

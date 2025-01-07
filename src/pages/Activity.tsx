import SectionTitle from '../components/section/SectionTitle';
import SectionSubTitle from '../components/section/SectionSubTitle';
import SectionContent from 'components/section/SectionContent';
import { ReactComponent as Link } from '../assets/icon/link-white.svg';
import { LinkContentProps } from 'types/Section';

const Activity = () => {
  const content = ({ text, linkText, link }: LinkContentProps) => {
    return (
      <>
        {text && <>{text} </>}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-animation cursor-pointer"
        >
          <div className="flex flex-row items-center">
            <span className="">{linkText}</span>
            <Link className="w-[0.8rem] h-[0.8rem] ml-1" />
          </div>
        </a>
      </>
    );
  };

  return (
    <div>
      <SectionTitle title="Activity" />
      <div className="flex flex-col md:flex-row">
        <div className="flex-none md:pr-[8rem] md:mb-0 mb-4">
          <SectionSubTitle
            title="UMC"
            sub="4th"
            content="대학 IT 동아리 University MakeUs Challenge"
            startDate="2023.03"
            endDate="2023.08"
          />
        </div>
        <div className="flex-1 space-y-1">
          <SectionContent
            content={content({
              text: '팀 프로젝트 및',
              linkText: 'React 스터디 진행',
              link: 'https://pineapple-cobra-0e0.notion.site/UMC-React-1400de8db79d8076a347fd2911f6b751',
            })}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-9">
        <div className="flex-none md:pr-[13.8rem] md:mb-0 mb-4">
          <SectionSubTitle
            title="멋쟁이사자처럼"
            sub="9th"
            content="대학생 IT 창업 동아리 LIKELION"
            startDate="2021.03"
            endDate="2021.11"
          />
        </div>
        <div className="flex-1 space-y-1">
          <SectionContent content="HTML/CSS, JavaScript, Django 스터디 진행" />
          <SectionContent
            content={content({
              linkText: '아이디어톤 및 해커톤 참여',
              link: 'https://pineapple-cobra-0e0.notion.site/Github-16c0de8db79d80e68b93e21e5a39e7ef',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Activity;

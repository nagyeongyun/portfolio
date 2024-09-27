import SectionTitle from '../components/section/SectionTitle';
import PreviewBox from 'components/project/PreviewBox';
import Logo1 from '../assets/img/pj1-logo.svg';
import Img1 from '../assets/img/pj1-preview.svg';
import Logo2 from '../assets/img/pj2-logo.svg';
import Img2 from '../assets/img/pj2-preview.svg';

const Project = () => {
  return (
    <div>
      <SectionTitle title="Project" />
      <div className="grid grid-cols-2 gap-8 ">
        <PreviewBox
          img={[Logo2, Img2]}
          title="꿈틀"
          content={[
            '세상에 하나뿐인 동화, 꿈틀에서 마음껏 즐겨보세요!',
            '나만의 동화를 만들고 공유할 수 있는 AI 기반 맞춤형 동화 제작 웹 서비스입니다.',
          ]}
          skill={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
          url="https://github.com/Dream-Twist/FE_DreamTwist"
        />
        <PreviewBox
          img={[Logo1, Img1]}
          title="Todis"
          content={[
            '날씨 앱 하나로 옷 코디까지 쉽고 빠르게!',
            '날씨 정보와 추천 코디를 제공하고, 나만의 아바타를 꾸며 친구들과 공유할 수 있는 웹 서비스입니다.',
          ]}
          skill={['React', 'TypeScript', 'Styled-components']}
          url="https://github.com/Todis-UMC/Todis_web"
        />
      </div>
    </div>
  );
};

export default Project;

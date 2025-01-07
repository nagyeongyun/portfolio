import SectionTitle from 'components/section/SectionTitle';
import SectionSubTitle from 'components/section/SectionSubTitle';

const Certificate = () => {
  return (
    <>
      <SectionTitle title="Certificate" />
      <div className="flex-none md:pr-[8rem] md:mb-0 mb-4">
        <SectionSubTitle
          title="정보처리기사"
          content="한국산업인력공단"
          startDate="2024.12"
        />
      </div>
    </>
  );
};

export default Certificate;

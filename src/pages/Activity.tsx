import SectionTitle from '../components/section/SectionTitle';
import SectionSubTitle from '../components/section/SectionSubTitle';

const Activity = () => {
  return (
    <div>
      <SectionTitle title="Activity" />
      <SectionSubTitle
        title="UMC"
        sub="4th"
        content="대학 IT 동아리 University MakeUs Challenge"
        startDate="2023.03"
        endDate="2023.08"
      />
      <div className="mt-9">
        <SectionSubTitle
          title="멋쟁이사자처럼"
          sub="9th"
          content="대학생 IT 창업 동아리 LIKELION"
          startDate="2021.03"
          endDate="2021.11"
        />
      </div>
    </div>
  );
};

export default Activity;

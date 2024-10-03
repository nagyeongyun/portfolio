import SectionTitle from '../components/section/SectionTitle';
import { skillDetail } from 'data/skillDetail';

const Skill = () => {
  return (
    <>
      <SectionTitle title="Skill" />
      <div>
        {Object.entries(skillDetail).map(([skill, descriptions]) => (
          <div key={skill} className="mb-6">
            <h3 className="font-Pretendard-200 text-[1.2rem] mb-2">{skill}</h3>
            <ul className="list-disc pl-4 space-y-1 text-zinc-300">
              {descriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skill;

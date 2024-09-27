import { TagProps } from 'types/Section';

const Tag = ({ skill }: TagProps) => {
  return (
    <div className="flex flex-row space-x-1.5 text-[0.8rem] text-zinc-200 font-Pretendard-100">
      {skill.map((item, index) => (
        <div
          key={index}
          className="rounded bg-zinc-800 py-0.5 px-3 inline-block"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Tag;

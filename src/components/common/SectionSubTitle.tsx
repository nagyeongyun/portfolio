import { SectionProps } from '../../types/Section';

const SectionSubTitle: React.FC<SectionProps> = ({
  title,
  sub,
  content,
  startDate,
  endDate,
}) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <p className="font-Pretendard-200 text-[1.2rem]">{title} </p>
        <span className="ml-3 text-[1rem] text-zinc-400 font-Pretendard-100">
          {sub}
        </span>
      </div>
      <p className="whitespace-pre mt-1.5 text-[1rem] text-zinc-400">
        {content}
      </p>
      <p className="whitespace-pre mt-0.5 text-[0.9rem] text-zinc-400">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

export default SectionSubTitle;

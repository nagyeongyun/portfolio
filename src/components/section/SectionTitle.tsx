const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="font-Pretendard-50 text-[2.5rem] text-center">{title}</p>
      <hr className="mt-2 mb-8 border-gray-300 border-t-[0.5px] border-opacity-80" />
    </div>
  );
};

export default SectionTitle;
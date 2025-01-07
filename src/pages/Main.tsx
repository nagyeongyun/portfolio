import Typewriter from 'typewriter-effect';
import { ReactComponent as Arrow } from '../assets/icon/double-arrow.svg';
import { ReactComponent as Link } from '../assets/icon/link.svg';

const Main = () => {
  return (
    <>
      <div className="text-[1.5rem] sm:text-[2.5rem] md:text-6xl lg:text-7xl self-start leading-[2rem] sm:leading-[3rem] md:leading-[5rem] lg:leading-[6rem] font-Pretendard-200">
        <p>안녕하세요.</p>
        <p>
          <span className="inline-block">
            <Typewriter
              options={{
                strings: [
                  '프론트엔드',
                  '끊임없이 개선하려는',
                  '기본에 충실하려는',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <span className="inline-block ml-3">개발자</span>
        </p>
        <p>
          <span className="font-Pretendard-400">나경윤</span>입니다.
        </p>
      </div>
      <div className="self-start sm:text-xl text-[0.9rem] mt-16">
        <p className="mb-0.5">
          Email. <span className="font-Pretendard-200">nathin9@naver.com</span>
        </p>
        <div>
          Github.{' '}
          <a
            href="https://github.com/nagyeongyun"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-animation cursor-pointer"
          >
            <div className="flex flex-row items-center">
              <span className="font-Pretendard-200 pb-0.5">
                github.com/nagyeongyun
              </span>
              <Link className="w-[0.8rem] h-[0.8rem] ml-1 mt-0.5" />
            </div>
          </a>
        </div>
      </div>
      <div>
        <hr className="mt-16 mb-12 border-zinc-300" />
        <div className="md:text-[1.25rem] text-[0.8rem] text-justify leading-[1.2rem] md:leading-[2rem] mb-[3rem]">
          <p className="mb-3">
            사용자에게 가치를 제공하는 안정적인 서비스 개발을 목표로 합니다.
          </p>
          <p>
            다양한 프로젝트를 통해 코드의 유지보수성과 성능 최적화 등 서비스의
            품질을 높이고 사용자 경험을 개선하는 방법을 배웠습니다. 또한, 협업
            과정에서 코드 품질 관리와 커뮤니케이션의 중요성을 깨닫고 팀과 함께
            목표를 효과적으로 달성하는 역량을 키웠습니다. 이는 웹 개발에 대한
            이해를 넓히고자 수료한 AI 웹 풀스택 교육에서 대상을 수상하는 성과로
            이어졌습니다. 앞으로도 능동적인 문제 해결 자세와 지속적인 기술
            성장을 통해 사용자에게 실질적인 가치를 제공할 수 있는 개발자가
            되겠습니다.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Arrow className="absolute bottom-10 w-[1.5rem] h-[1.5rem] self-center animate-bounce" />
      </div>
    </>
  );
};

export default Main;

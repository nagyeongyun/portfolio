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
        <div className="md:text-[1.35rem] text-[0.9rem] text-justify leading-[1.2rem] md:leading-[2rem] mb-[3rem]">
          <p className="mb-3">
            지속적으로 배우고 경험을 쌓아가는 개발자입니다.
          </p>
          <p>
            여러 웹 기술을 활용한 프로젝트를 수행하며, 이에 대한 이해를 넓히고자
            노력해왔습니다. GitHub 협업 경험을 통해 코드 품질 관리와 팀워크의
            중요성을 직접 체감했습니다. 또한, 개발 동아리와 스터디에서 다양한
            시각과 접근 방식을 익혀가며 꾸준한 학습과 성장을 추구하고 있습니다.{' '}
            <br />
            기본에 충실하며 문제 해결에 집중해, 팀과 함께 목표를 이뤄내는
            개발자가 되고자 노력하고 있습니다.
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

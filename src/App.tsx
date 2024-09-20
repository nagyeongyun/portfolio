import Typewriter from 'typewriter-effect';
import { ReactComponent as Arrow } from './assets/icon/double-arrow.svg';
import SectionTitle from './components/common/SectionTitle';

function App() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center top-0 sticky h-screen px-[28rem] bg-white">
        <div className="text-7xl self-start leading-[6rem] font-Pretendard-200">
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
        <div className="self-start text-xl mt-16">
          <p className="mb-0.5">
            Email.{' '}
            <span className="font-Pretendard-200">nathin9@naver.com</span>
          </p>
          <p>
            Github.{' '}
            <a
              href="https:github.com/nagyeongyun"
              target="_blank"
              rel="noopener noreferrer"
              className="font-Pretendard-200 pb-0.5 underline-animation"
            >
              github.com/nagyeongyun
            </a>
          </p>
        </div>
        <div>
          <hr className="mt-16 mb-12" />
          <div className="text-[1.35rem] text-justify leading-[2rem] mb-[3rem]">
            <p className="mb-3">
              지속적으로 배우고 경험을 쌓아가는 개발자입니다.
            </p>
            <p>
              다양한 웹 기술을 활용한 프로젝트를 수행하며, 이에 대한 이해를
              넓히고자 노력해왔습니다. GitHub 협업 경험을 통해 코드 품질 관리와
              팀워크의 중요성을 직접 체감했습니다. 또한, 개발 동아리와
              스터디에서 다양한 시각과 접근 방식을 익혀가며 꾸준한 학습과 성장을
              추구하고 있습니다. <br />
              기본에 충실하며 문제 해결에 집중해, 팀과 함께 목표를 이뤄내는
              개발자가 되고자 노력하고 있습니다.
            </p>
          </div>
        </div>
        <Arrow className="absolute bottom-10 w-[1.5rem] h-[1.5rem] self-center animate-bounce" />
      </main>
      <section className="relative bg-zinc-800 text-white px-[28rem] pt-[3rem] pb-[4rem]">
        <article>
          <SectionTitle title="Skill" />
          <p className="font-Pretendard-200 text-[1.2rem]">
            HTML/CSS
            <br />
            JavaScript
          </p>
        </article>
        <article className="mt-10">
          <SectionTitle title="Project" />
        </article>
        <article className="mt-10">
          <SectionTitle title="Activity" />
          <p className="font-Pretendard-200 text-[1.2rem]">
            UMC{' '}
            <span className="ml-2 text-[1rem] text-zinc-400 font-Pretendard-100">
              4th
            </span>
          </p>
          <p className="whitespace-pre mt-1.5 text-[1rem] text-zinc-400">
            IT 동아리 University MakeUs Challenge
          </p>
          <p className="whitespace-pre mt-0.5 text-[0.9rem] text-zinc-400">
            2023.03 - 2023.08
          </p>
          <p className="font-Pretendard-200 text-[1.2rem] mt-8">
            멋쟁이사자처럼{' '}
            <span className="ml-2 text-[1rem] text-zinc-400 font-Pretendard-100">
              9th
            </span>
          </p>
          <p className="whitespace-pre mt-1.5 text-[1rem] text-zinc-400">
            대학생 IT 창업 동아리 LIKELION
          </p>
          <p className="whitespace-pre mt-0.5 text-[0.9rem] text-zinc-400">
            2021.03 - 2021.11
          </p>
        </article>
        <article className="mt-10">
          <SectionTitle title="Education" />
          <div className="flex">
            <div className="flex-none pr-[10rem]">
              <p className="font-Pretendard-200 text-[1.2rem]">
                엘리스 AI 웹 풀스택 트랙{' '}
                <span className="ml-2 text-[1rem] text-zinc-400 font-Pretendard-100">
                  10th
                </span>
              </p>
              <p className="whitespace-pre mt-1.5 text-[1rem] text-zinc-400">
                IT 부트캠프 Elice
              </p>
              <p className="whitespace-pre mt-0.5 text-[0.9rem] text-zinc-400">
                2024.03 - 2024.08
              </p>
            </div>
            <div className="flex-1 space-y-1">
              <p className="mt-0.5 text-[1rem]">
                ◦ JavaScript, React.js, Node.js, 파이썬 데이터 분석, 딥러닝 기초
                학습
              </p>
              <p>◦ AI 웹 서비스 프로젝트 III 대상</p>
            </div>
          </div>
          <div>
            <p className="font-Pretendard-200 text-[1.2rem] mt-8">
              덕성여자대학교
              <span className="ml-3 text-[1rem] text-zinc-400 font-Pretendard-100">
                학사
              </span>
            </p>
            <p className="whitespace-pre mt-1.5 text-[1rem] text-zinc-400">
              일어일문학과(주전공){' '}
              <span className="ml-1.5">IT미디어공학과(복수전공)</span>
              <p className="text-[0.9rem] mt-0.5">
                2018.03 - 2023.08 ㅣ<span className="ml-1">졸업</span>
              </p>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;

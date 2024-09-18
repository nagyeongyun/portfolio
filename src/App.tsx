import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="mx-[28rem] my-24">
      <header>
        <div className="text-7xl leading-[6rem] font-Pretendard-200">
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
        <div className="text-xl mt-16">
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
          <div className="text-[1.35rem] text-justify leading-[2rem]">
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
      </header>
    </div>
  );
}

export default App;
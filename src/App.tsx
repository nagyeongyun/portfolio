import Main from './pages/Main';
import Skill from './pages/Skill';
import Education from './pages/Education';
import Project from './pages/Project';
import Activity from './pages/Activity';
import Certificate from './pages/Certificate';

function App() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center top-0 sticky h-screen sm:px-8 md:px-16 lg:px-[12rem] xl:px-[16rem] 2xl:px-[28rem] bg-white">
        <div className="px-10 sm:p-0">
          <Main />
        </div>
      </main>

      <section className="relative bg-zinc-800 space-y-16 text-white md:px-16 lg:px-[12rem] xl:px-[16rem] 2xl:px-[28rem] pt-[3rem] pb-[6rem]">
        <div className="px-10 md:p-0">
          <article>
            <Skill />
          </article>
          <article>
            <Project />
          </article>
          <article>
            <Activity />
          </article>
          <article>
            <Education />
          </article>
          <article>
            <Certificate />
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;

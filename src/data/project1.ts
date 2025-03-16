import { ProjectDetail } from 'types/Modal';
import image0 from '../assets/img/pj1-page0.png';
import image1 from '../assets/img/pj1-page1.png';
import image2 from '../assets/img/pj1-page2.png';
import image3 from '../assets/img/pj1-page3.png';
import image4 from '../assets/img/pj1-page4.png';
import image5 from '../assets/img/pj1-page5.png';
import dev0 from '../assets/img/pj1-dev0.gif';
import dev1 from '../assets/img/pj1-dev1.png';
import dev2 from '../assets/img/pj1-dev2.png';
import dev3 from '../assets/img/pj1-dev3.png';

export const project1: ProjectDetail = {
  title: '꿈틀',
  subTitle: 'AI 기반 맞춤형 동화 제작 웹 서비스',
  duration: '2024.07 - 2024.08',
  team: ['프론트엔드 개발자 3명', '백엔드 및 AI 개발자 4명'],
  images: [image0, image1, image2, image3, image4, image5],
  keyFeatures: [
    {
      feature: '동화 제작 - 직접 생성과 AI 기반 생성',
      detail: [
        '제목, 테마, 줄거리를 직접 작성하거나 간략한 줄거리 작성을 통해 AI 기반 맞춤형 동화 생성',
      ],
    },
    {
      feature: '동화 이미지 삽입',
      detail: [
        '장면 묘사 작성을 통한 AI 기반 이미지 생성',
        '그림판 기능으로 사용자가 직접 그림을 그려 삽입, 이미지 파일 첨부',
      ],
    },
    {
      feature: '메인페이지',
      detail: [
        '베스트 동화 및 작가 조회',
        '태그, 제목별 검색 기능과 최신순·인기순·조회순 정렬',
      ],
    },
    {
      feature: '동화 게시판',
      detail: [
        '동화 조회, 조회수 확인 및 좋아요 기능',
        '내가 쓴 동화 수정, 삭제 기능 및 댓글 작성',
      ],
    },
    {
      feature: '결제페이지',
      detail: [
        'toss payments를 이용한 포인트 구매와 AI 동화 생성 이용 시 포인트 사용',
      ],
    },
    {
      feature: '마이페이지',
      detail: [
        '내 동화, 좋아요한 동화, 내가 쓴 댓글, 보유 포인트, 결제 내역 조회 및 환불 요청 기능',
        '프로필 수정 및 회원 탈퇴',
      ],
    },
  ],
  techStack: [
    {
      tech: 'React',
      reason: [
        '컴포넌트 기반 구조와 상태 관리, SPA 방식으로 효율적이고 부드러운 UI 개발을 위해 사용했습니다.',
      ],
    },
    {
      tech: 'Next.js',
      reason: [
        'SSR을 결합해 초기 로딩 속도를 개선하고, 메타데이터 설정을 통한 SEO 최적화를 위해 사용했습니다.',
        'App Router를 통해 페이지 구성과 라우팅을 직관적이고 간단하게 설정할 수 있습니다.',
      ],
    },
    {
      tech: 'TypeScript',
      reason: [
        '타입 체크를 통해 코드 안정성 및 유지보수성을 높이고, 리팩토링 시 오류를 방지하기 위해 사용했습니다.',
      ],
    },
    {
      tech: 'Tailwind CSS',
      reason: [
        '유틸리티 클래스 기반 스타일링으로 일관성 있는 UI 디자인과 효율적인 반응형 디자인 구현을 위해 사용했습니다.',
      ],
    },
  ],
  contributions: {
    메인페이지: {
      image: dev0,
      details: [
        {
          contribution: '디바운싱을 이용한 검색 최적화 및 태그/정렬 기능',
          detail: [
            '검색어 입력에 따른 API 요청을 지연시켜 불필요한 요청을 줄이고 성능을 개선했습니다.',
          ],
        },
        {
          contribution: '무한 스크롤 구현',
          detail: [
            'react-intersection-observer 라이브러리를 기반으로 요소가 뷰포트에 들어오는 것을 감지하는 무한 스크롤을 구현했습니다.',
            '세션스토리지를 활용해 동화 클릭 후 뒤로가기 시 이전 항목과 스크롤 위치를 복원하여 사용자 경험을 개선했습니다. ',
          ],
        },
      ],
    },
    '동화 게시판': {
      image: dev1,
      details: [
        {
          contribution: '동화 페이지와 미리보기 버튼 동기화',
          detail: [
            'useRef와 scrollIntoView()를 활용해 동화 페이지 전환 시 해당 페이지를 중심으로 미리보기 버튼과 스크롤이 자동으로 이동하도록 구현했습니다.',
          ],
        },
        {
          contribution: 'Canvas를 활용한 줄거리 텍스트 이미지 변환',
          detail: [
            'HTML Canvas를 활용해 동적으로 텍스트를 이미지로 변환하고, 가독성을 위해 measureText로 줄의 너비를 측정하여 자동 줄바꿈이 되도록 구현했습니다.',
          ],
        },
        {
          contribution: '댓글 작성, 수정, 삭제',
          detail: [
            'useMemo를 활용한 페이지네이션으로 댓글 목록을 관리하고 불필요한 재렌더링을 방지했습니다.',
          ],
        },
      ],
    },
    마이페이지: {
      image: dev2,
      details: [
        {
          contribution: '사용자 게시글 클릭 시 접근성 및 상태 표시',
          detail: [
            '사용자가 리스트에서 게시글을 클릭할 때, 해당 글의 공개 여부와 삭제 상태를 반영해 적절한 메시지를 표시함으로써 예상치 못한 오류 페이지나 공백 화면을 방지했습니다.',
          ],
        },
        {
          contribution: 'SVG 이미지 컴포넌트화',
          detail: [
            'SVG 이미지를 React 컴포넌트로 구현하여 재사용성을 높였습니다.',
            'fill, rotate 등의 속성에 동적 스타일링을 적용하여 UI 유연성을 극대화했습니다.',
          ],
        },
      ],
    },
    '구글 로그인': {
      image: dev3,
      details: [
        {
          contribution: '로컬스토리지를 통한 Token 관리',
          detail: [
            '서버에서 URL 해시를 통해 토큰을 제공받아 이를 추출하여 로컬 스토리지에 저장하고 관리했습니다.',
            '그러나 로컬 스토리지가 XSS 공격에 취약하여 토큰 탈취의 위험이 높다는 점을 인지하게 되었고, 보다 안전한 토큰 관리를 위해 로컬 스토리지, 세션 스토리지, 쿠키의 차이점과 보안적 특성을 학습했습니다.',
          ],
        },
      ],
    },
  },
  collaboration: [
    {
      feature: '컨벤션 설정',
      detail: [
        '네이밍, 주석 스타일 등 코드 컨벤션과 깃 커밋 컨벤션을 설정하여 팀원 간의 일관성을 유지하는 개발 환경을 조성했습니다.',
      ],
    },
    {
      feature: '체계적인 개발 프로세스',
      detail: [
        'WBS, 스토리보드, 플로우차트 작성 등 기획·디자인 단계에 참여해 사용자 경험과 기술적 구현의 균형을 고려하고 사용성이 높은 서비스 개발에 기여했습니다.',
      ],
    },
    {
      feature: 'Swagger를 통한 API 문서화 및 소통 개선',
      detail: [
        'Swagger 문서를 활용해 API 구조를 파악하고, FE-BE 간 원활한 소통으로 연동 오류를 최소화했습니다.',
      ],
    },
  ],
  trouble: [
    {
      feature: '무한 스크롤 페이지에서 스크롤 위치 복원',
      detail: [
        '무한 스크롤이 적용된 메인페이지의 동화 목록에서 동화 게시판 이동 후 뒤로 가기 시 스크롤 위치가 초기화되어 처음부터 다시 스크롤 해야 하는 불편함이 있었습니다.',
        '무한 스크롤 페이지로 이동 시 컴포넌트가 다시 렌더링되면서 스크롤 위치와 로드되었던 데이터를 유지하지 못해 발생한 문제였습니다.',
        '목록에서 동화 클릭 시 현재 로드된 데이터, 페이지 인덱스, 스크롤 위치를 세션스토리지에 저장하여 뒤로 가기 시 이전에 스크롤 했던 위치와 데이터 상태가 자연스럽게 복원되도록 했습니다.',
      ],
    },
    {
      feature: '디바운싱을 이용한 검색 최적화',
      detail: [
        '동화 검색 시 결과 데이터 로딩 속도가 느려지는 문제가 있었습니다.',
        '검색어 입력 시마다 즉시 API 요청이 일어나면서 서버 과부화 및 페이지 성능 저하가 발생한 문제였습니다.',
        '디바운싱을 사용하여 사용자가 입력하는 동안 API 요청을 지연시키고, 일정 시간 동안 입력이 없으면 마지막 입력에 대해 API 요청을 보내도록 처리하여 불필요한 요청을 줄였습니다.',
      ],
    },
  ],
};

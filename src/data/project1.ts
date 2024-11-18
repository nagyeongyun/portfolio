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
        '동화책과 미리보기 스크롤 뷰를 상호작용하여 조회, 조회수 확인 및 좋아요 기능',
        '내가 쓴 동화 수정, 삭제 기능 및 댓글 작성',
      ],
    },
    {
      feature: '결제 페이지',
      detail: [
        'toss payments를 이용해 포인트를 구매하고 동화 제작에서 AI 이용 시 포인트 사용 및 환불 요청 기능',
      ],
    },
    {
      feature: '마이페이지',
      detail: [
        '내 동화, 좋아요한 동화, 내가 쓴 댓글, 보유 포인트, 결제 내역 조회',
        '프로필 수정 및 회원 탈퇴',
      ],
    },
  ],
  techStack: [
    {
      tech: 'React',
      reason: [
        'React의 상태 관리와 Next.js의 SSR 결합을 통해 초기 로딩 속도를 개선하고 사용자에게 더 나은 동적인 UI 경험을 제공합니다.',
      ],
    },
    {
      tech: 'Next.js',
      reason: [
        '메타데이터를 통한 SEO를 개선합니다.',
        '각 페이지에 제목, 설명, 키워드 등 메타 태그를 설정해 검색 엔진이 페이지를 쉽게 인식하고 노출할 수 있습니다.',
        'App Router를 통해 페이지 구성과 라우팅을 직관적이고 간편하게 관리할 수 있습니다.',
      ],
    },
    {
      tech: 'TypeScript',
      reason: [
        '타입 체크를 통해 코드의 안전성과 가독성을 향상시키고 코드 오류를 사전에 예방할 수 있습니다.',
        '컴포넌트 간의 데이터 흐름을 명확히 하고 리팩토링 시에도 안전성을 보장할 수 있습니다.',
      ],
    },
    {
      tech: 'Tailwind CSS',
      reason: [
        '클래스 기반 스타일링을 통해 직관적으로 UI를 개발할 수 있고 디자인 일관성을 유지할 수 있습니다.',
        '반응형 유틸리티 클래스를 제공해 특정 화면 크기에 맞춰 간편한 반응형 디자인 구현이 가능합니다.',
      ],
    },
  ],
  contributions: {
    메인페이지: {
      image: dev0,
      details: [
        {
          contribution: '디바운싱을 이용한 제목, 태그별 검색 및 정렬',
          detail: [
            '불필요한 API 요청을 줄이기 위해 검색어 입력값의 변화를 지연시키는 디바운싱 훅을 구현함으로써 과도한 부하를 방지하고 성능을 개선했습니다.',
          ],
        },
        {
          contribution: '무한 스크롤 구현',
          detail: [
            'react-intersection-observer 라이브러리를 기반으로 요소가 뷰포트에 들어오는 것을 감지하는 무한 스크롤 훅을 구현했습니다.',
            'sessionStorage를 활용해 페이지 상태(아이템 목록, 스크롤 위치)를 저장하여 동화 클릭 후 뒤로 가기 시 스크롤 위치가 유지되도록 구현했습니다. 이를 통해 사용자가 이전 목록으로 자연스럽게 돌아가 흐름이 끊기지 않도록 했습니다.',
          ],
        },
      ],
    },
    '동화 게시판': {
      image: dev1,
      details: [
        {
          contribution: '동화 페이지와 미리보기 버튼 상호작용',
          detail: [
            'useRef와 scrollIntoView()를 활용해 동화 페이지 전환 시 해당 페이지를 중심으로 미리보기 버튼과 스크롤이 자동으로 이동되도록 하여 동기화된 미리보기를 제공했습니다.',
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
            'useMemo를 활용해 불필요한 재렌더링을 방지하는 페이지네이션 커스텀 훅을 구현하여 댓글 목록을 효율적으로 관리했습니다.',
          ],
        },
      ],
    },
    마이페이지: {
      image: dev2,
      details: [
        {
          contribution: 'Presigned URL을 사용한 S3 이미지 업로드',
          detail: [
            'Presigned URL로 이미지를 S3 버킷에 직접 업로드함으로써 서버 트래픽 부담을 줄였습니다.',
            'URL에 제한된 권한이 적용되어 있어 안전하게 파일을 업로드할 수 있으며, 업로드 성공 시 URL을 통해 결과를 즉시 확인할 수 있습니다.',
          ],
        },
        {
          contribution: '사용자 게시글 클릭 시 접근성 및 상태 표시',
          detail: [
            '사용자가 리스트에서 게시글을 클릭할 때, 해당 글의 공개 여부와 삭제 상태를 반영해 적절한 메시지를 표시함으로써 예상치 못한 오류 페이지나 공백 화면을 방지했습니다.',
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
        'WBS, 스토리보드, 정보구조도, 플로우차트 등의 문서 작성을 통해 프로젝트의 전반적인 흐름을 명확히 하고 개발 과정에서의 목표와 역할을 체계적으로 정리했습니다.',
      ],
    },
    {
      feature: 'Swagger를 통한 API 문서화 및 소통 개선',
      detail: [
        'Swagger를 사용해 API 요청 및 응답 형식에 대한 이해를 높이고 팀원 간 커뮤니케이션을 효율적으로 개선했습니다.',
      ],
    },
  ],
};

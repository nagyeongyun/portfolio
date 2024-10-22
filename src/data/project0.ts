import { ProjectDetail } from 'types/Modal';
import image0 from '../assets/img/pj0-page0.png';
import image1 from '../assets/img/pj0-page1.png';
import image2 from '../assets/img/pj0-page2.png';
import image3 from '../assets/img/pj0-page3.png';
import dev0 from '../assets/img/pj0-dev0.gif';

export const project0: ProjectDetail = {
  title: 'Todis',
  subTitle: '날씨 맞춤 코디 추천 웹 서비스',
  duration: '2023.07 - 2023.08',
  team: [
    'PM 1명',
    '디자이너 1명',
    '프론트엔드 개발자 5명',
    '백엔드 개발자 4명',
  ],
  images: [image0, image1, image2, image3],
  keyFeatures: [
    {
      feature: '위치 기반 날씨 정보 시각화',
      detail: [
        '현재 위치 또는 도시 검색을 통한 기온, 강수량, 대기질 등 날씨 정보 제공',
      ],
    },
    {
      feature: '날씨에 맞춘 코디 추천',
      detail: ['날씨에 따라 오늘의 코디 팁 제안'],
    },
    {
      feature: '아바타 커스터마이징',
      detail: ['상의, 하의, 신발, 악세서리 등으로 나만의 아바타 생성'],
    },
    {
      feature: '친구 추가 및 조회',
      detail: ['친구 목록 관리 및 친구 아바타 확인'],
    },
    {
      feature: '전체 사용자 조회 및 좋아요',
      detail: ['전체 사용자 아바타와 상태 메시지 조회, 좋아요 기능'],
    },
  ],
  techStack: [
    {
      tech: 'React',
      reason: [
        '컴포넌트 기반 구조로 재사용성과 관리가 용이하고 가상 DOM을 활용해 빠른 렌더링 성능과 동적인 UI 구현이 가능합니다.',
      ],
    },
    {
      tech: 'TypeScript',
      reason: [
        '타입 체크를 통해 코드의 안전성과 가독성을 향상시키고 코드 오류를 사전에 예방할 수 있습니다.',
      ],
    },
    {
      tech: 'Styled-components',
      reason: [
        'CSS-in-JS 방식으로 스타일을 컴포넌트에 직접 작성해 코드의 일관성과 가독성을 높이고, 동적 스타일링을 통해 props를 기반으로 조건부 스타일을 쉽게 구현할 수 있습니다.',
        '변동성이 큰 스타일링을 효과적으로 처리하기 위해 Styled-components를 선택했습니다.',
      ],
    },
  ],
  contributions: {
    '아바타 커스터마이징 및 오늘의 코디 추천': {
      image: dev0,
      details: [
        {
          contribution: 'dom-to-image를 활용한 아바타 이미지 저장',
          detail: [
            'dom-to-image 라이브러리를 사용해 아바타의 상태를 JPEG 이미지로 변환하고 저장하는 기능을 구현했습니다. 이 과정에서 useRef를 활용해 이미지 요소를 참조하고 domtoimage.toJpeg 메서드를 통해 이미지의 품질과 크기를 설정했습니다.',
            '비동기 처리로 저장 진행 상태를 사용자에게 알림으로써 사용자 경험을 향상했습니다.',
          ],
        },
        {
          contribution: 'Blob 변환을 통한 FormData 이미지 전송',
          detail: [
            'Base64 인코딩된 이미지 URL을 Blob 객체로 변환해 FormData에 추가한 후 POST 요청으로 서버에 전송함으로써 대용량 이미지 데이터를 효율적으로 처리하고 전송 성능을 향상시켰습니다.',
          ],
        },
        {
          contribution: '아이템 로드 관리',
          detail: [
            'Webpack의 기능인 require.context를 통해 이미지를 효율적으로 로드해 코드의 가독성과 유지보수성을 향상시켰습니다.',
          ],
        },
        {
          contribution: 'Promise.all을 활용한 실시간 날씨 데이터 처리',
          detail: [
            '여러 API의 응답을 효율적으로 관리하기 위해 Promise.all을 사용해 날씨 데이터를 비동기적으로 동시에 호출함으로써 데이터 수집 속도를 단축할 수 있었습니다.',
          ],
        },
        {
          contribution: '반응형 UI',
          detail: [
            'react-responsive의 useMediaQuery 훅을 활용해 특정 화면 크기 조건을 확인하고, 조건부 렌더링을 통해 모바일 환경에 맞는 스타일을 적용했습니다.',
          ],
        },
      ],
    },
  },
  collaboration: [
    {
      feature: 'GitHub 협업 관리',
      detail: [
        'GitHub 이슈를 통해 작업 내용과 진행 상황을 체계적으로 관리하고, PR 템플릿을 활용해 일관성을 유지하며 코드 리뷰 후 Merge하는 방식으로 협업했습니다.',
      ],
    },
    {
      feature: '디자인 시스템 이해',
      detail: [
        'CSSProperties와 글로벌 스타일을 정의하여 일관된 디자인 시스템을 구축했습니다. ',
      ],
    },
    {
      feature: 'Swagger를 활용한 백엔드와의 원활한 소통',
      detail: [
        'Swagger로 백엔드 API 구조를 사전에 파악해 요청/응답 형식을 명확히 이해하고 소통 효율성을 높였습니다.',
      ],
    },
  ],
};

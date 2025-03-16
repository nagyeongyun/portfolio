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
        '컴포넌트 기반 구조와 상태 관리, SPA 방식으로 효율적이고 부드러운 UI 개발을 위해 사용했습니다.',
      ],
    },
    {
      tech: 'TypeScript',
      reason: [
        '타입 체크를 통해 코드 안정성 및 유지보수성을 높이고, 리팩토링 시 오류를 방지하기 위해 사용했습니다.',
      ],
    },
    {
      tech: 'Styled-components',
      reason: [
        'CSS-in-JS 방식으로 스타일을 컴포넌트에 직접 작성하여 동적 및 조건부 스타일링을 구현하고, 컴포넌트 단위로 스타일을 관리함으로써 복잡한 UI 변경에 유연하게 대응하기 위해 사용했습니다.',
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
            'dom-to-image 라이브러리를 활용해 아바타 상태를 JPEG 이미지로 변환하는 기능을 구현했습니다.',
          ],
        },
        {
          contribution: 'Blob 변환을 통한 FormData 이미지 전송',
          detail: [
            'Base64 이미지 URL을 Blob 객체로 변환해 대용량 이미지 데이터의 전송 성능을 개선했습니다.',
          ],
        },
        {
          contribution: '아이템 로드 관리',
          detail: [
            'Webpack의 require.context를 통해 폴더 내 아이템 이미지를 동적 로드하여 가독성과 유지보수성을 개선했습니다.',
          ],
        },
        {
          contribution: 'Promise.all을 활용한 실시간 날씨 데이터 처리',
          detail: [
            '여러 API의 응답을 효율적으로 관리하기 위해 Promise.all을 사용해 호출함으로써 데이터 수집 속도를 개선했습니다.',
          ],
        },
        {
          contribution: '반응형 UI',
          detail: [
            'react-responsive의 useMediaQuery 훅을 활용해 특정 화면 크기에 따른 조건부 렌더링으로 모바일 환경에 맞는 스타일을 적용했습니다.',
          ],
        },
      ],
    },
  },
  collaboration: [
    {
      feature: 'GitHub 협업 관리',
      detail: [
        'GitHub 이슈를 통해 작업 내용과 진행 상황을 관리하고, PR 템플릿을 활용해 일관성을 유지하며 코드 리뷰 후 Merge하는 방식으로 협업했습니다.',
      ],
    },
    {
      feature: '디자인 시스템 이해',
      detail: [
        '팀에서 구축한 CSSProperties와 글로벌 스타일 시스템을 활용하여 일관된 UI 구현과 컴포넌트 스타일링 효율성을 향상시킬 수 있었습니다.',
      ],
    },
    {
      feature: 'Swagger를 활용한 백엔드와의 원활한 소통',
      detail: [
        'Swagger 문서를 활용해 API 구조를 파악하고 팀원 간의 소통을 개선했습니다.',
      ],
    },
  ],
  trouble: [
    {
      feature: 'Base64 이미지 데이터 크기 문제 해결을 위한 Blob 변환',
      detail: [
        '최종 아바타 상태의 이미지를 저장하는 과정에서 Base64 형식의 이미지 데이터가 너무 커지는 문제가 발생했습니다.',
        '최종 아바타 이미지를 저장하는 데 사용한 domtoimage.toJpeg()는 DOM 요소를 캡처하여 이미지 데이터를 Base64 형식으로 반환합니다. 이때 Base64로 인코딩된 이미지는 이진 데이터를 텍스트 형식으로 변환하면서 약 33% 정도 크기가 커지고 매우 긴 문자열로 저장됩니다.',
        'Base64 형식의 이미지 데이터를 Blob으로 변환하여 용량을 효율적으로 줄이는 방식으로 문제를 해결했습니다. Blob은 이진 데이터를 그대로 저장할 수 있기 때문에 Base64보다 크기가 작고, 파일 전송 시 데이터 크기를 최소화할 수 있었습니다.',
      ],
    },
  ],
};

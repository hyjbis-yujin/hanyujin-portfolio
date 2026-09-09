export const projects = [
  {
    id: 1,
    type: "Company",
    title: "네이처이앤티 신문고",
    desc: "네이처이앤티 관계사 윤리경영 제보 사이트 구축",
    tags: ["기업", "제보시스템", "반응형"],
    logo: "/images/projects/logos/nature-logo.svg",
    screenshots: [
      "/images/projects/nature/1.jpg",
      "/images/projects/nature/2.jpg",
      "/images/projects/nature/3.jpg",
      "/images/projects/nature/4.jpg",
      "/images/projects/nature/5.jpg",
      "/images/projects/nature/6.jpg",
      "/images/projects/nature/7.jpg"
    ],
    links: { github: "#", demo: "https://www.ethics.natureent.com/" },
    meta: {
      main: "구축",
      duration: "2025.08 - 2025.09",
      contribution: "기획 참여 · 디자인 전담",
      device: "반응형",
    },
    highlights: [
      "입력 부담을 분산한 제보하기 멀티 스텝 폼 UI",
      "제보 목록·상세를 일관된 패턴으로 보여주는 관리자 페이지 및 상세페이지 디자인",
      "제보 진행 상황을 확인할 수 있도록 마련한 결과 확인(로그인) 페이지 UI 디자인",
      "3개 화면에 반복 적용한 카드 컴포넌트 설계",
    ],
    caseStudy: {
      problem: "임직원의 부조리·비리 제보를 받아 관계사의 윤리경영을 확립하기 위한 제보 시스템 사이트를 구축하는 프로젝트였습니다. 제보 대상과 핵심 과업이 명확히 안내되지 않으면 진입 단계에서 이탈할 수 있었고, 한 페이지에 입력 항목이 길게 늘어서 있으면 작성해야 할 양에 압도되어 중도에 포기하기 쉬웠으며, 기기나 이용 환경에 구애 받지 않고 제보할 수 있는 화면을 제공할 필요가 있었습니다.",
      solution: [
        "제보 기준을 직관적으로 안내하기 위해 제보 대상을 탭으로 나눠 카드 UI로 정리하고, 주요 행동으로 이어지도록 고대비 버튼 배치",
        "긴 작성 양식의 부담을 분산하기 위해 폼을 단계별로 나눈 멀티 스텝 구조로 재구성",
        "다양한 해상도에서 일관성을 유지하기 위해 Input·Button 공통 컴포넌트를 정의해 반복 적용",
      ],
      result: [
        "입력 항목을 단계별로 나눈 멀티 스텝 구조로 한 번에 마주하는 양을 줄여 끝까지 작성할 수 있는 흐름 구성",
        "카드 UI와 명확한 폼 분류로 작성 중 인지 부담을 낮추는 화면 구성",
        "반복 적용 가능한 컴포넌트를 정의해 디자인 일관성과 유지보수 용이성 확보",
      ],
    },
  },
  {
    id: 2,
    type: "Company",
    title: "아이제스트",
    desc: "반도체 기반 바이오센서 진단 영문 사이트 구축",
    tags: ["기업", "바이오", "적응형"],
    logo: "/images/projects/logos/igest-logo.svg",
    screenshots: [
      "/images/projects/igest/1.jpg",
      "/images/projects/igest/2.jpg",
      "/images/projects/igest/3.jpg",
      "/images/projects/igest/4.jpg",
    ],
    links: { github: "#", demo: "http://www.igest.co.kr/eng/" },
    meta: {
      main: "구축",
      duration: "2025.06 - 2025.07",
      contribution: "기획 참여 · 디자인 전담",
      device: "적응형",
    },
    highlights: [
      "첫인상을 설계한 히어로 배너·제품 소개 메인 페이지 레이아웃 디자인",
      "일관된 탐색 경험을 만든 GNB·헤더·브레드크럼 통일 서브페이지 공통 레이아웃 디자인",
      "부족한 요소를 보완하기 위해 검토한 사이트 콘셉트 기반 콘텐츠 디자인 가이드 수정 및 요소 추가",
    ],
    caseStudy: {
      problem: "글로벌 바이어를 대상으로 회사 소개와 보유 기술, 뉴스 등을 알리는 영문 공식 홈페이지를 구축하는 프로젝트였습니다. 바이오 반도체 분야 특성상 첫 화면에서 무엇을 하는 회사인지 직관적으로 전달되기 어려웠고, 기술력과 전문성을 나타낼 시각적·구조적 정체성도 부족한 상태였습니다.",
      solution: [
        "첫 화면에서 사업 영역이 바로 읽히도록 기술 소개 슬로건과 사업 이미지를 드러내는 비주얼 인터랙션으로 히어로 구성",
        "기업의 신뢰감을 전달하기 위해 톤앤매너와 비주얼 요소를 정의해 일관 적용",
        "제품군과 학술·연구 성과를 비교 탐색하도록 캐러셀 기반 정보 구조로 구성",
      ],
      result: [
        "기업에 맞는 컬러와 그래픽 규칙을 정리해 이후 페이지에도 동일하게 적용되는 톤앤매너 확보",
        "상단에 핵심 슬로건, 하단에 캐러셀을 배치해 제품 라인업과 소식지를 쉽게 탐색하도록 구성",
      ],
    },
  },
  {
    id: 3,
    type: "Company",
    title: "나주문화재단",
    desc: "나주시 문화행사·전시 안내 사이트 구축",
    tags: ["공공기관", "문화예술", "적응형"],
    logo: "/images/projects/logos/naju-logo.svg",
    screenshots: [
      "/images/projects/naju/1.jpg",
      "/images/projects/naju/2.jpg",
      "/images/projects/naju/3.jpg",
      "/images/projects/naju/4.jpg"
    ],
    links: { github: "#", demo: "https://www.njcf.or.kr/" },
    meta: {
      main: "구축",
      duration: "2025.05 - 2025.07",
      contribution: "기획 참여 · 디자인 전담",
      device: "적응형",
    },
    highlights: [
      "행사를 시각적으로 강조한 포스터형 행사 카드 UI 디자인",
      "관심 행사를 한눈에 구분하도록 컬러를 부여한 날짜별 카테고리 표시 및 모아보기 모달 UI 디자인",
      "모바일에서도 자연스럽게 재배치되도록 만든 적응형 내비게이션·콘텐츠 레이아웃 디자인",
      "사이트 콘셉트 기반 콘텐츠 디자인 가이드 수정 및 요소 추가",
    ],
    caseStudy: {
      problem: "나주시의 문화예술 사업과 행사 정보를 통합 제공하는 사이트를 구축하는 프로젝트였습니다. 이용자를 모으려면 전시·공연·축제 등 행사의 성격이 먼저 전달되어야 했고, 장기 행사와 특정 날짜에만 열리는 단기 행사를 구분해 원하는 날짜의 정보를 쉽게 확인할 수 있는 캘린더가 필요했습니다.",
      solution: [
        "행사 종류를 빠르게 식별하도록 탭으로 구분하고 카드에 카테고리별 뱃지를 적용",
        "내용을 유추할 수 있도록 행사 포스터를 활용한 카드 UI로 구성",
        "월별 일정 흐름을 한눈에 보도록 그리드 캘린더 레이아웃 구성",
        "같은 날 여러 행사를 한 번에 확인하도록 일별 종합 모달 제공",
      ],
      result: [
        "카테고리 뱃지와 포스터 중심 카드로 주요 행사를 빠르게 훑어볼 수 있는 메인 구성",
        "월간 그리드 캘린더와 일별 종합 모달로 원하는 날짜의 행사 정보에 닿는 단계 축소",
      ],
    },
  },
  {
    id: 4,
    type: "Company",
    title: "중앙청소년유해환경감시단",
    desc: "청소년 유해환경 감시·보호 비영리단체 사이트 구축",
    tags: ["비영리단체", "청소년", "PC"],
    logo: "/images/projects/logos/yhewg-logo.svg",
    screenshots: [
      "/images/projects/yhewg/1.jpg",
      "/images/projects/yhewg/2.jpg",
      "/images/projects/yhewg/3.jpg",
      "/images/projects/yhewg/4.jpg"
    ],
    links: { github: "#", demo: "http://www.xn--660bt22anzc1yebwf.kr/www/" },
    meta: {
      main: "구축",
      duration: "2024.08 - 2024.10",
      contribution: "기획 참여 · 디자인 전담",
      device: "PC",
    },
    highlights: [
      "정보 성격이 섞이지 않도록 분리 설계한 이미지 중심 포토갤러리·텍스트 중심 공지사항 카드 UI 디자인",
      "후원 현황이 상시 노출되도록 만든 플로팅 위젯 디자인",
      "단체 신뢰를 뒷받침하도록 구성한 감시단소개·조직도 등 서브페이지 콘텐츠 디자인",
      "메인·서브 전체 페이지 마크업 및 스타일 퍼블리싱",
    ],
    caseStudy: {
      problem: "청소년 보호와 비행 예방 활동을 알리는 비영리 봉사단체 사이트를 구축하는 프로젝트였습니다. 청소년 보호·예방 프로그램에 쓰이는 기부금이 얼마나 모였는지 보여줄 창구가 필요했고, 단체가 지금도 활발히 운영되고 있다는 현재성을 방문자에게 전달할 방법도 필요했습니다.",
      solution: [
        "활동의 투명성을 드러내기 위해 후원금 현황 위젯을 메인 상단에 상시 노출",
        "단체의 최근 활동을 확인할 수 있도록 공지사항과 활동 사진을 캐러셀 UI로 배치하고, 주요 사업은 아이콘으로 정리해 배치",
        "정보성 콘텐츠의 전달력을 높이기 위해 복잡한 텍스트를 다이어그램 형태의 UI로 정리",
      ],
      result: [
        "후원금 현황 위젯을 전면에 배치해 후원 내역을 화면에서 바로 확인할 수 있도록 구성",
        "공지사항과 활동 사진을 캐러셀로 배치해 최근 활동이 메인에 계속 노출되도록 하고, 5개 주요 사업을 아이콘 카드로 정리해 단체가 하는 일을 한눈에 파악하도록 구성",
        "서브페이지 정보를 비주얼 중심 구조로 구성해 조직 정보와 사업 내용의 가독성 확보",
      ],
    },
  },
  {
    id: 5,
    type: "Company",
    title: "선린대학교 취업창업지원센터",
    desc: "선린대학교 취업·창업 지원 안내 사이트 개편",
    tags: ["교육기관", "취·창업 지원", "적응형"],
    logo: "/images/projects/logos/sunlin-logo.svg",
    screenshots: [
      "/images/projects/sunlin/1.jpg",
      "/images/projects/sunlin/2.jpg"
    ],
    links: { github: "#", demo: "https://job.sunlin.ac.kr/" },
    meta: {
      main: "개편",
      duration: "2024.08 - 2024.10",
      contribution: "기획 참여 · 디자인 전담",
      device: "적응형",
    },
    highlights: [
      "브랜드 인상을 강화한 그린 브랜드 컬러·일러스트레이션 메인페이지 구성",
      "주요 서비스로 바로 이동할 수 있게 배치한 바로가기 UI",
      "탐색 부담을 줄이기 위해 통일한 사이드바형 서브페이지 공통 레이아웃 디자인",
    ],
    caseStudy: {
      problem: "대학 내 취업·창업 정보를 통합 안내하는 사이트를 개편하는 프로젝트였습니다. 기존 사이트는 브랜딩 컬러가 명확하지 않고 보색이 산만하게 쓰여 통일감이 없었으며, 레이아웃에 불필요한 공백이 많고 시각적 대비가 약해 콘텐츠 전달력이 떨어졌습니다.",
      solution: [
        "통일감 없는 컬러 사용을 정리하기 위해 요청받은 그린 계열을 기준으로 컬러 시스템을 정의해 전체에 적용",
        "공지사항은 리스트형으로 정보 전달력을 높이고, 채용정보는 캐러셀 UI와 뱃지를 적용해 가독성과 탐색 편의성 확보",
        "주요 정보가 먼저 보이도록 시각적 위계를 다시 잡아 불필요한 스크롤 축소",
      ],
      result: [
        "전용 컬러 시스템으로 파편화된 비주얼 요소를 통합해 센터의 브랜드 인상 정리",
        "같은 계열 안에서 컬러를 대비시켜 주요 서비스를 구분하고, 채용 정보와 공지의 시각적 위계를 명확히 정리",
        "주요 콘텐츠를 취합해 불필요한 공백을 줄이고 사용자 탐색 동선 개선",
      ],
    },
  },

  {
    id: 6,
    type: "Personal",
    title: "BUFF",
    desc: "여러 OTT의 인기 콘텐츠를 한눈에 모아보는 미디어 큐레이션 플랫폼",
    tags: ["미디어", "OTT추천", "반응형"],
    logo: "/images/projects/logos/buff-logo.svg",
    screenshots: [
      "/images/projects/buff/1.jpg",
      "/images/projects/buff/2.jpg",
      "/images/projects/buff/3.jpg",
      "/images/projects/buff/4.jpg"
    ],
    links: { github: "https://github.com/hyjbis-yujin/buff", demo: "https://buff-gamma.vercel.app/" },
    meta: {
      main: "구축",
      duration: "2026.04 - 2026.05",
      contribution: "기획 · 디자인 · 개발 단독",
      device: "반응형",
    },
    highlights: [
      "한 화면에서 비교할 수 있도록 설계한 5대 OTT 실시간 랭킹 홈 구성",
      "유튜브 예능 채널을 소개하는 카드형 리스트",
      "탐색 방식을 다양화한 배너형 추천작·콜라주형 테마 컬렉션 카드 디자인",
      "콘텐츠 간 이동을 자연스럽게 연결한 상세 페이지 메타데이터·연관 콘텐츠 UI",
    ],
    caseStudy: {
      problem: "여러 OTT와 유튜브의 콘텐츠를 비교해 인기 순위를 정리하고 추천하는 큐레이션 서비스를 개인 프로젝트로 제작했습니다. 콘텐츠를 비교하려면 여러 플랫폼을 개별로 확인해야 해 탐색이 분산되고, 방대한 목록 속에서 무엇을 볼지 정하는 데 시간이 걸리며, 콘텐츠 정보를 확인하기 어려워 탐색 흐름이 끊기는 문제가 있었습니다.",
      solution: [
        "외부 앱 이동 없이 한곳에서 비교하도록 플랫폼별 콘텐츠를 모으고 카테고리로 분류",
        "관심 콘텐츠를 자연스럽게 발견하도록 인기·추천 콘텐츠를 상단에 배치하고 섹션별 테마 큐레이션 제공",
        "정보 과부하를 막기 위해 카드에는 포스터·제목·순위·태그·요약만 노출하고 세부 내용은 상세 영역으로 분리",
      ],
      result: [
        "여러 OTT의 인기 콘텐츠를 한곳에 모으고 탭 기반 분류를 적용해 앱 이동 없이 비교 가능한 환경 구성",
        "메인 배너와 실시간 랭킹, 테마별 추천 컬렉션으로 선택 부담을 줄인 탐색 경로 마련",
        "목록 카드에는 핵심 정보만 두고 출연진·줄거리·연관 콘텐츠는 상세로 분리해 탐색 흐름 유지",
      ],
    },
  },
  {
    id: 7,
    type: "Personal",
    title: "motimo",
    desc: "목표 달성을 위한 그룹 챌린지 및 습관 형성 커뮤니티",
    tags: ["커뮤니티", "챌린지", "모바일 전용"],
    logo: "/images/projects/logos/motimo-logo.svg",
    screenshots: [
      "/images/projects/motimo/1.jpg",
      "/images/projects/motimo/2.jpg",
      "/images/projects/motimo/3.jpg",
      "/images/projects/motimo/4.jpg",
      "/images/projects/motimo/5.jpg"
    ],
    links: { github: "https://github.com/hyjbis-yujin/motimo", demo: "https://motimo-pi.vercel.app/" },
    meta: {
      main: "구축",
      duration: "2026.04 - 2026.05",
      contribution: "기획 · 디자인 · 개발 단독",
      device: "모바일 전용",
    },
    highlights: [
      "모바일 사용성을 최우선으로 설계한 UI",
      "게스트·회원 상태에 따라 화면이 다르게 보이도록 만든 동적 분기 디자인",
      "참여감을 시각화한 배지·참가자 수 모듈형 카드 디자인",
      "출석체크 탭에서 1일 1회 출석 현황을 확인하는 UI 디자인",
    ],
    caseStudy: {
      problem: "목표 달성과 습관 형성을 돕는 그룹 챌린지 서비스를 개인 프로젝트로 제작했습니다. 둘러보기 없이 로그인부터 요구하면 진입 단계에서 이탈하기 쉽고, 분류 기준이 넓으면 시작 전 탐색이 길어지며, 함께 하는 상대나 진행 상황에 대한 피드백이 없으면 참여 동기가 이어지지 않는다는 점이 설계의 출발점이었습니다.",
      solution: [
        "진입 장벽을 낮추기 위해 비로그인 상태에서도 콘텐츠를 둘러볼 수 있도록 구성",
        "선택 폭을 좁히기 위해 카테고리 분류와 오늘의 추천을 홈 상단에 배치",
        "참여 동기를 유지하도록 챌린지를 모임 형태로 구성해 함께하는 참여자를 드러냄",
        "성취를 눈으로 확인하도록 출석 제도를 두고 챌린지 참여 탭을 세분화",
      ],
      result: [
        "로그인 없이 전체 목록·오늘의 추천·인기 챌린지를 볼 수 있게 구성해 진입 장벽 완화",
        "분야별 카테고리와 추천 섹션을 홈 상단에 배치해 선택 폭 축소",
        "상세 페이지에 참여자 이모지와 함께하는 인원을 표시하고, 출석체크로 서로의 진행 상황을 비교할 수 있도록 구성",
        "참여·완료 탭을 나눠 진행 중인 챌린지와 완료한 챌린지를 구분해 확인하도록 구성",
      ],
    },
  },
  {
    id: 8,
    type: "Personal",
    title: "2026 포트폴리오",
    desc: "다양한 프로젝트를 담은 개인 포트폴리오 사이트",
    tags: ["개인", "아카이브", "반응형"],
    logo: "/images/projects/logos/portfolio2026-logo.svg",
    screenshots: [
      "/images/projects/portfolio2026/1.jpg",
      "/images/projects/portfolio2026/2.jpg",
      "/images/projects/portfolio2026/3.jpg",
      "/images/projects/portfolio2026/4.jpg",
      "/images/projects/portfolio2026/5.jpg",
      "/images/projects/portfolio2026/6.jpg"
    ],
    links: { github: "https://github.com/hyjbis-yujin/hanyujin-portfolio", demo: "https://portfolio-yujin.vercel.app/" },
    meta: {
      main: "구축",
      duration: "2026.02 - 진행 중",
      contribution: "기획 · 디자인 · 개발 단독",
      device: "반응형",
    },
    highlights: [
      "핵심 정보를 한눈에 보여주는 Home 대시보드형 위젯 구성",
      "자기소개를 자연스럽게 전달하는 About 스크롤텔링형 질문·답변 UI",
      "정보를 구조화한 Career 섹션의 회사별·활동별 경력 카드",
      "정보를 구조화한 Skill 섹션의 분야별 탭 역량 아이콘 카드",
      "작업 과정을 깊이 있게 담은 Project 섹션의 탭별 작업물과 상세 모달",
    ],
    caseStudy: {
      problem: "소개와 프로젝트를 담은 개인 포트폴리오 사이트를 제작했습니다. 문서 형식의 기존 포트폴리오는 최신 기술 스택과 실무 역량을 보여주기에 구조적 한계가 있었고, 정보가 파편화되어 있어 짧은 탐색 시간 안에 핵심을 파악하기 어려웠으며, 정적인 텍스트와 이미지만으로는 프로젝트의 실제 동작과 상호작용을 전달하기 어려웠습니다.",
      solution: [
        "기술 역량과 구현력을 직접 보여주기 위해 문서 전달 방식에서 인터랙티브 웹 포트폴리오로 재구축",
        "주요 항목을 빠르게 파악하도록 메인에 핵심 섹션을 모은 대시보드형 위젯 구성",
        "탐색 흐름을 끊지 않도록 프로젝트를 성격별로 분류하고 세부 케이스는 모달로 분리",
      ],
      result: [
        "정적 문서에서 반응형 웹으로 옮겨 기술 스택 활용과 배포·구현 과정을 동작하는 결과물로 제시",
        "대시보드형 위젯으로 흩어져 있던 정보를 모으고, 바로가기 버튼으로 About·Project까지 이어지는 탐색 동선 구성",
        "회사/개인으로 분류하고 모달로 세부 화면과 개선 과정을 담아 경험 전달력 확보",
      ],
    },
  },
  {
    id: 9,
    type: "Personal",
    title: "2022 포트폴리오",
    desc: "이전 버전의 개인 포트폴리오 사이트 아카이브",
    tags: ["개인", "아카이브", "PDF"],
    logo: "/images/projects/logos/portfolio2022-logo.svg",
    screenshots: [
      "/images/projects/portfolio2022/1.jpg",
      "/images/projects/portfolio2022/2.jpg",
      "/images/projects/portfolio2022/3.jpg",
      "/images/projects/portfolio2022/4.jpg",
      "/images/projects/portfolio2022/5.jpg",
      "/images/projects/portfolio2022/6.jpg",
      "/images/projects/portfolio2022/7.jpg",
      "/images/projects/portfolio2022/8.jpg",
      "/images/projects/portfolio2022/9.jpg"
    ],
    links: { github: "#", demo: "/files/portfolio2022.pdf" },
    meta: {
      main: "포트폴리오",
      duration: "2022.02 - 2022.07",
      contribution: "기획 · 디자인 · 개발 단독",
      device: null,
    },
    highlights: [
      "프로모션 마이크로사이트 UI 디자인",
      "브랜드 리뉴얼 및 리브랜딩 디자인",
      "앱 UI/UX 설계",
      "이벤트페이지 및 상세페이지 디자인",
    ],
    caseStudy: {
      problem: "디자인 학습 초기, 웹·앱·브랜딩 등 성격이 다른 작업 경험을 하나의 포트폴리오로 정리해 보여줄 필요가 있었습니다.",
      solution: [
        "프로모션·브랜드·앱·이벤트 등 성격이 다른 작업물 포함",
        "여러 역량을 균형 있게 보여주기 위한 하나의 포트폴리오 흐름 구성",
      ],
      result: [
        "프로모션·브랜드·앱·이벤트 등 성격이 다른 작업물을 하나의 흐름으로 구성",
        "여러 역량을 함께 보여주는 초기 커리어 아카이브로 보존",
        "프로모션 마이크로사이트·브랜드 리뉴얼·앱 UI/UX·이벤트 페이지 등 서로 다른 작업 유형을 한 포트폴리오에서 확인 가능",
      ],
    },
  },
];

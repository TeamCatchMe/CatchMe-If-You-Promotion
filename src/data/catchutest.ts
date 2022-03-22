import {
  ImgCatchu1,
  ImgCatchu10,
  ImgCatchu11,
  ImgCatchu12,
  ImgCatchu2,
  ImgCatchu3,
  ImgCatchu4,
  ImgCatchu5,
  ImgCatchu6,
  ImgCatchu7,
  ImgCatchu8,
  ImgCatchu9,
} from '../assets';

export const catchuTestItems: CatchuTestItem[] = [
  {
    index: '1',
    question: '오늘 점심 메뉴로 나온 맛있는 반찬😋\n근데 딱 한 개라면?',
    answer: {
      a: '제일 첫 입은 너로 정했다! 가장 먼저 먹는다.',
      b: '한 개니까 마무리로! 아꼈다가 마지막에 먹는다.',
    },
    type: '성실성',
    Catchu: ImgCatchu1,
  },
  {
    index: '2',
    question: '유럽 여행을 떠난다면\n더 해보고 싶은 것은',
    answer: {
      a: '미술관/박물관 투어 후 감상평 나누기',
      b: '맛집에서 밥먹고 근처에서 쇼핑하기',
    },
    type: '개방성',
    Catchu: ImgCatchu2,
  },
  {
    index: '3',
    question: '친구한테 축하할 일이 생겼다!🎉\n나는...',
    answer: {
      a: '너!!무!! 축하해~~!!! 친구보다 내가 더 방방 뛴다.',
      b: '진짜 축하해...! 흐뭇한 미소와 함께 조용히 기뻐한다.',
    },
    type: '외향성',
    Catchu: ImgCatchu3,
  },
  {
    index: '4',
    question: '전부터 보고싶던 영화가\n개봉했다고?',
    answer: {
      a: '‘같이 볼 사람 구합니다(1/??)’ 단톡방에 올린다.',
      b: '집중해서 혼자 봐야 진정한 감상이지! 혼자 간다.',
    },
    type: '외향성',
    Catchu: ImgCatchu4,
  },
  {
    index: '5',
    question: '여유롭게 산책하던 중...\n앗, 길을 잘못 들었다!',
    answer: {
      a: '오히려 좋아, 새로운 곳 탐험~.~',
      b: 'ㄷㄷ 빨리 지도 앱을 켜서 맞는 길 찾아야지.',
    },
    type: '개방성',
    Catchu: ImgCatchu5,
  },
  {
    index: '6',
    question: '캐플릭스에 재밌는 드라마가 떴다고?\n그렇다면',
    answer: {
      a: '좋아 내일까지 밤새서 정주행 달려!',
      b: '오래 몰입하려면 하루에 한 편씩 봐야지~',
    },
    type: '성실성',
    Catchu: ImgCatchu6,
  },
  {
    index: '7',
    question: '오랜만에 생긴 쉬는 날\n휴가를 즐겨볼까?',
    answer: {
      a: '가고 싶었던 곳 여기저기 쏘다니기:>',
      b: '침대에서 가만히 있는 게 최고의 휴가~',
    },
    type: '외향성',
    Catchu: ImgCatchu7,
  },
  {
    index: '8',
    question: '우연히 발견한 너무 좋은 노래...',
    answer: {
      a: '이건 모두가 알아야 해. SNS에 올려야지!',
      b: '나만 아는 좋은 노래로 남겨두는 게 멋...😎',
    },
    type: '우호성',
    Catchu: ImgCatchu8,
  },
  {
    index: '9',
    question: '추억 소환,\n갑자기 리코더에 꽂힌 당신.',
    answer: {
      a: '어느 세월에 연습해~\n리코더 연주 영상을 재생한다.',
      b: '직접 연주해보고 싶어...!\n당장 문구점에서 리코더를 사온다.',
    },
    type: '성실성',
    Catchu: ImgCatchu9,
  },
  {
    index: '10',
    question: '이제 진짜 진짜로 운동 좀 해야지💪',
    answer: {
      a: '바람을 느끼며 강변 달리기',
      b: '쾌적한 헬스장에서 PT 받기',
    },
    type: '외향성',
    Catchu: ImgCatchu10,
  },
  {
    index: '11',
    question: '이봐 캐사원,\n다음 프로젝트는 어떤 팀에 들어가겠나?',
    answer: {
      a: '미래는 보장 못하지만 재밌을 것 같은 신생 팀',
      b: '내가 익숙하게 잘할 수 있는 일을 하게 될 고인물 팀',
    },
    type: '개방성',
    Catchu: ImgCatchu11,
  },
  {
    index: '12',
    question:
      '맘에 드는 옷 발견! 검은색이 눈에 들어오는데\n흰색이 더 어울린다는 친구의 한마디...',
    answer: {
      a: '보는 사람 눈이 정확하겠지~\n친구 말 듣고 흰색 산다⚪️',
      b: '그래도 내 마음에 드는 게 우선이지!\n먼저 눈에 들어온 검은색 산다⚫️',
    },
    type: '우호성',
    Catchu: ImgCatchu12,
  },
];

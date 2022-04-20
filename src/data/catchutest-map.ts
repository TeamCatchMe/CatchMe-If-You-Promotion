import AAAATxt from '../assets/results/aaaa-text.svg';
import AAABTxt from '../assets/results/aaab-text.svg';
import AABATxt from '../assets/results/aaba-text.svg';
import AABBTxt from '../assets/results/aabb-text.svg';
import ABAATxt from '../assets/results/abaa-text.svg';
import ABBATxt from '../assets/results/abba-text.svg';
import ABABTxt from '../assets/results/abab-text.svg';
import ABBBTxt from '../assets/results/abbb-text.svg';
import BAAATxt from '../assets/results/baaa-text.svg';
import BAABTxt from '../assets/results/baab-text.svg';
import BABATxt from '../assets/results/baba-text.svg';
import BABBTxt from '../assets/results/babb-text.svg';
import BBAATxt from '../assets/results/bbaa-text.svg';
import BBBATxt from '../assets/results/bbba-text.svg';
import BBABTxt from '../assets/results/bbab-text.svg';
import BBBBTxt from '../assets/results/bbbb-text.svg';

export const questionToType: {
  [k: string]: '성실성' | '개방성' | '외향성' | '우호성';
} = {
  '1': '성실성',
  '2': '개방성',
  '3': '외향성',
  '4': '우호성',
  '5': '개방성',
  '6': '성실성',
  '7': '외향성',
  '8': '우호성',
  '9': '성실성',
  '10': '외향성',
  '11': '개방성',
  '12': '우호성',
};

export enum TextType {
  special = 'special',
  normal = 'normal',
  ultra = 'ultra',
}

enum CatchuDataKey {
  AAAA = 'AAAA',
  AAAB = 'AAAB',
  AABA = 'AABA',
  AABB = 'AABB',
  ABAA = 'ABAA',
  ABBA = 'ABBA',
  ABAB = 'ABAB',
  ABBB = 'ABBB',
  BAAA = 'BAAA',
  BAAB = 'BAAB',
  BABA = 'BABA',
  BABB = 'BABB',
  BBAA = 'BBAA',
  BBBA = 'BBBA',
  BBAB = 'BBAB',
  BBBB = 'BBBB',
}

export type CatchuDataType = {
  name: string;
  catchuText: string;
  reverse: CatchuDataKey;
  shortDescription: { content: string; type: TextType }[];
  longDescription: { content: string; type: TextType }[];
  characteristics: string[];
};

type AnswerToCatchuType = {
  [key in CatchuDataKey]: CatchuDataType;
};

export const answerToCatchu: AnswerToCatchuType = {
  AAAA: {
    name: '찰칵- 멋진 곳만 골라 출사 다니는 포토그래퍼',
    catchuText: AAAATxt,
    reverse: CatchuDataKey.BBBB,
    shortDescription: [
      { content: '밝은 에너지', type: TextType.special },
      { content: '와 당신만의 매력이 강점인 당신!', type: TextType.normal },
    ],
    longDescription: [
      {
        content: '특유의 재치와 친화력으로 많은 사람들을 끌어당길 거예요. ',
        type: TextType.normal,
      },
      {
        content: '새로운 장소',
        type: TextType.special,
      },
      {
        content: '에 가는 것을 좋아하고, 함께하는 사람들과 그곳에서의 ',
        type: TextType.normal,
      },
      {
        content: '추억을 만드는 시간',
        type: TextType.special,
      },
      {
        content:
          '을 소중하게 생각해요. 그날의 온도, 습도, 분위기... 이 모든 반짝이는 순간들을 담아낸 사진을 캐치미에 기록하는 건 어떨까요?',
        type: TextType.special,
      },
    ],
    characteristics: [
      '매일 안에만 있는 건 좀이 쑤셔서 못 버텨요.',
      '일상 속에서 자주 일어나는 익숙한 일보다는 새롭고 신선한 일을 좋아해요.',
      '소속감이 중요해요. 취미 생활을 하더라도 혼자 하는 것보다는 여럿이 하는 것을 좋아해서 모임이나 동아리를 찾아다녀요.',
      '끈기는 약간 부족해요. 꾸준히 노력해서 달성해야 하는 것보다는 한 번에 몰입하고 털어낼 수 있는 것에 강해요.',
    ],
  },
  AAAB: {
    name: '크루들과 함께 도심 속 달리기, 시티 러너',
    catchuText: AAABTxt,
    reverse: CatchuDataKey.BBBA,
    shortDescription: [
      { content: '운동 하나를 하더라도\n', type: TextType.normal },
      { content: '재미없고 평범한 건 싫은', type: TextType.special },
      { content: ' 당신!', type: TextType.normal },
    ],
    longDescription: [
      {
        content: '화려한 도시의 밤',
        type: TextType.special,
      },
      {
        content: '을 가로지르며 러닝 크루들과 함께 달려봐요. ',
        type: TextType.normal,
      },
      {
        content: '매번 다른 코스와 유연한 모임',
        type: TextType.special,
      },
      {
        content:
          '으로 새로운 사람들을 많이 만나보는 것도 좋을 거예요. 오늘 하루가 조금 찌뿌둥했다면, 한바탕 달린 후 캐치미에 남겨보는 건 어떨까요? ',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '활동적인 에너지를 발산하는 분위기 메이커.',
      '여러 사람들과 함께 하는 활동을 좋아하고 모임의 풀이 다양해요.',
      '평상시에 덜렁거린다는 말을 듣지는 않나요? 사물을 주의 깊게 관찰하는 것에는 조금 약한 편이에요.',
      '취미 활동에 며칠, 몇 주, 몇 달이 걸리는 건 못 기다려요! 당장 오늘을 즐기는 것이 중요해요.',
    ],
  },
  AABA: {
    name: '한 걸음 한 걸음, 나를 찾는 길을 걷는 트래킹족',
    catchuText: AABATxt,
    reverse: CatchuDataKey.BBAB,
    shortDescription: [
      { content: '재미있는 게 너무 많아', type: TextType.special },
      { content: '\n부지런할 수밖에 없는 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '내가 걷는 길이 곧 산티아고! 재미있는 게 너무 많아서 부지런할 수밖에 없는 당신은 오늘도 길을 나서요. 특유의 ',
        type: TextType.normal,
      },
      {
        content: '자신감과 깊은 생각',
        type: TextType.special,
      },
      {
        content: '이 주변 사람들에게 매력으로 다가가지만, ',
        type: TextType.normal,
      },
      {
        content: '고독을 즐기는',
        type: TextType.special,
      },
      {
        content:
          ' 의외의 시크함이 있네요. 장기적인 목표보단 하루하루에 충실한 당신의 걸음을 캐치미에 기록해보는 건 어떨까요? ',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '혼자서 깊은 생각에 빠질 때가 많아요. 너무 많은 사람들과 함께하기보단 생각 정리를 할 수 있는 취미를 더 좋아해요.',
      '매일 같은 일은 지겨워요. 오늘은 오늘의 행복이 있으니까!',
      '넘치는 건강한 에너지가 당신을 바깥으로 이끌어요.',
      '해보지도 않고 겁먹기보단 모험을 좋아하고 상상력도 풍부한 편이에요.',
    ],
  },
  AABB: {
    name: '오르지 못한 절벽은 없어! 마운틴 클라이머',
    catchuText: AABBTxt,
    reverse: CatchuDataKey.BBAA,
    shortDescription: [
      { content: '높이 솟은 암벽일지라도 ', type: TextType.normal },
      { content: '나의 길을 개척할', type: TextType.special },
      { content: ' 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content: '당신의 ',
        type: TextType.normal,
      },
      {
        content: '강한 자기애와 활동성',
        type: TextType.special,
      },
      {
        content:
          '은 같은 자리를 디뎌도 매번 멋진 자리로 올려다 줄 거예요. 정해지지 않은 것들에는 조금 두려움을 느낄 수 있지만 한 번 맞다고 생각한 것은 금방 받아들이는 편이에요. 오늘 찾은 당신의 길이 마음에 든다면 캐치미에 남겨보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '일상 속 익숙한 것들에 애정을 느끼고 소중히 생각해요.',
      '너무 진지한 건 싫어요. 산뜻한 무게로 살아가는 것을 지향해요.',
      '남들이 뭐라 하든 나는 나만의 길을 간다! 내가 느끼는 감정이 가장 강하고 마이웨이 기질이 다분해요.',
      '긍정적으로 세상을 바라보며 대인 관계도 활발한 사교성을 가지고 있어요.',
    ],
  },
  ABAA: {
    name: '내 안의 아이돌을 꺼내봐! 둠칫둠칫 댄서',
    catchuText: ABAATxt,
    reverse: CatchuDataKey.BABB,
    shortDescription: [
      { content: '넘치는 열정과 에너지', type: TextType.special },
      { content: '를 가진 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content: '스트리트 우먼 or 맨 파이터를 꿈꾸고 있진 않나요? 매사 ',
        type: TextType.normal,
      },
      {
        content: '에너지',
        type: TextType.special,
      },
      {
        content:
          ' 를 주체하지 못하고 자주 몸이 들썩거릴지도 몰라요. 한 곡을 완성하기 위해 ',
        type: TextType.normal,
      },
      {
        content: '매일같이 노력',
        type: TextType.special,
      },
      {
        content:
          '할 준비가 되어있는 당신은 친구들과 협동하는 것에 능숙해요. 자유로움과 풍부한 감정을 담은 오늘의 몸짓을 캐치미에 담아보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '하루아침의 요행은 믿지 않아요. 정해놓은 목표에 도달하기 위해서 꾸준히 노력해요.',
      '주변인의 말에 다소 영향을 받기는 하지만, 사람들의 여러 상황에 깊은 공감을 하는 편이에요.',
      '세상을 열정적으로 살아가는 것을 가치 있게 여겨요. 취미가 다양해요!',
      '전에 없던 것을 창조하고 도전하는 것을 좋아해요.',
    ],
  },
  ABAB: {
    name: '차곡차곡 도장깨기를 해볼까? 스트리트 푸드 파이터!',
    catchuText: ABABTxt,
    reverse: CatchuDataKey.BABA,
    shortDescription: [
      { content: '특유의 세심함', type: TextType.special },
      { content: '이 뛰어난 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '흐음... 여기는 10점 만점에 8점. 좋아하는 것들을 온 마음을 다해 ',
        type: TextType.normal,
      },
      {
        content: '좋아할 수 있는 열정의 소유자',
        type: TextType.special,
      },
      {
        content:
          ', 혹시 맛집을 줄줄이 꿰고 있지는 않나요? 당신은 모험이 걱정되어 꼼꼼히 평점을 확인하고 번지르르한 플레이팅보단 실제 후기를 ',
        type: TextType.normal,
      },
      {
        content: '읽어보는 편이에요.',
        type: TextType.special,
      },
      {
        content:
          ' 완벽한 식사를 위한 준비는 끝났으니, 오늘의 맛집을 캐치미에 남겨 더 많은 사람들에게 소개해봐요.',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '내가 좋아하는 것들을 다른 사람들과 나누는 것을 즐겨요.',
      '친구들의 말에 휩쓸리는 때도 있지만, 그만큼 타인의 의견을 존중해요.',
      '질서를 중요하게 생각하고 조심성이 있는 편이에요. 무턱대고 달려드는 모습은 찾기 힘들어요.',
      '겉으로만 아름다운 것은 무의미하다고 생각해요. 내부의 가치와 실용성을 가진 것들을 좋아해요.',
    ],
  },
  ABBA: {
    name: '혼자 봤던 풍경들이 고스란히 남기를, 여행 브이로거',
    catchuText: ABBATxt,
    reverse: CatchuDataKey.BAAB,
    shortDescription: [
      { content: '자연 속에서', type: TextType.special },
      { content: ' 에너지를 얻는 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content: '여행의 기억으로 남은 일상을 살아갈 거야! 당신은 ',
        type: TextType.normal,
      },
      {
        content: '새로운 곳',
        type: TextType.special,
      },
      {
        content: '을 여행하는 것을 겁내지 않고 ',
        type: TextType.normal,
      },
      {
        content: '인내심',
        type: TextType.special,
      },
      {
        content:
          '이 강해요. 혼자 간 여행이라도 삶의 방향성을 다잡게 된 소중한 순간들을 브이로그로 남기고 싶을지도 몰라요. 보고 듣고 느낀 것들을 캐치미에 기록해보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '무엇이든 꾸준히 하는 것이 가장 중요하다고 생각해요. 노력은 배신하지 않으니까!',
      '열심히 몸을 움직일 때 살아있음을 느껴요.',
      '남들의 말로 내 인생을 결정할 수는 없어요. 가치관이 확고한 편이에요.',
      '호기심이 많아서 많은 것들을 직접 경험해보고 싶고 도전을 서슴지 않을 자신이 있어요.',
    ],
  },
  ABBB: {
    name: '무럭무럭 키워서 맛있게 먹어버리겠다! 텃밭 가꾸는 농부',
    catchuText: ABBBTxt,
    reverse: CatchuDataKey.BAAA,
    shortDescription: [
      { content: '특유의 세심함', type: TextType.special },
      { content: '이 뛰어난 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '감자에 싹이 나서 잎이 나서~ 무언가를 키워내는 것에 뛰어난 당신! ',
        type: TextType.normal,
      },
      {
        content: '다정하고 집중력 높은 눈길',
        type: TextType.special,
      },
      {
        content:
          '은 아주 작은 흠집도 발견해 작물이 걱정 없이 자랄 수 있도록 도와줄 거예요. 누구보다 건강하고 탐스러운 결실을 위해 노력하고 이를 ',
        type: TextType.normal,
      },
      {
        content: '주변에 나누기',
        type: TextType.special,
      },
      {
        content:
          ' 좋아하는 당신, 캐치미에서 매일의 일지를 기록해보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '높은 관찰력으로 남들이 지나치는 것도 발견해낼 수 있어요. 타고나 눈썰미로 주의 깊게 주변을 파악해요.',
      '흥미를 느낀 것에는 누구보다 집중해서 몰입해요. 현실적인 선택과 집중에 강한 편이에요.',
      '남들과 비교를 많이 하진 않지만 지고는 못 살아요.',
      '다른 사람들과 소통하는 것을 즐기며 의견을 말하는 데에 소질이 있어요.',
    ],
  },
  BAAA: {
    name: '빠른 두뇌회전으로 체스를 두는 퀸즈갬빗, 아니 캐츄갬빗?',
    catchuText: BAAATxt,
    reverse: CatchuDataKey.ABBB,
    shortDescription: [
      { content: '충분한 고민', type: TextType.special },
      { content: '을 거친 뒤 실행하는 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '나이트, 왼쪽 한 칸 그리고 위로 두 칸. 짧고 굵은 한 판으로 당신의 ',
        type: TextType.normal,
      },
      {
        content: '똑똑함',
        type: TextType.special,
      },
      {
        content:
          '을 보여줄 수 있을 거예요. 무엇이든 믿고 맡길 수 있을 것 같은 ',
        type: TextType.normal,
      },
      {
        content: '듬직함',
        type: TextType.special,
      },
      {
        content:
          '과 행동력은 주변의 인정을 받기 딱 좋은 면들이죠. 진취적이지만 충분한 고민을 거친 뒤 실행하는 당신은 체스에 아주 유리할지도 몰라요. 오늘의 전술, 캐치미에 기록해보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '지적 호기심이 높아서 알고 있는 것도, 알고 싶은 것도 넘쳐나요.',
      '믿음직한 모습으로 주변 사람들에게 신뢰를 사는 편이에요.',
      '성격이 급해서 한 가지를 오래 붙잡고 있는 것에는 약해요. 여러 가지를 병행하는 것은 오히려 쉬울지도?',
      '오래 외출하기보단 편안한 공간에서 시간을 보내는 것이 최고예요.',
    ],
  },
  BAAB: {
    name: '싸늘하다... 가슴에 비수가 날ㅇ...! 보드 게임을 지배하는 게이머',
    catchuText: BAABTxt,
    reverse: CatchuDataKey.ABBA,
    shortDescription: [
      { content: '손은 눈보다 빠르니까!', type: TextType.special },
    ],
    longDescription: [
      {
        content:
          '손은 눈보다 빠르니까! 언뜻 보기엔 감정의 변화가 크지 않은 당신은 ',
        type: TextType.normal,
      },
      {
        content: '특유의 포커페이스',
        type: TextType.special,
      },
      {
        content:
          '로 게임을 평정해버릴지도 몰라요. 사람들과 함께하는 시간을 소중히 여기고 ',
        type: TextType.normal,
      },
      {
        content: '그날의 즐거움',
        type: TextType.special,
      },
      {
        content:
          '을 즉각적으로 느낄 수 있다면 최고로 보람찬 하루가 될 거예요. 오늘의 게임을 캐치미에서 소개해보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '감정 조절을 잘해서 쉽게 흥분하지 않아요. 당신이 화를 낸다면 정말로 많이 화났다는 뜻!',
      '한 가지에 너무 오래 몰두하기보다는 빠르게 해치우는 편이에요.',
      '인간관계에서 세상을 살아갈 힘을 얻곤 해요.',
      '현실적인 목표를 세우고 실제로 달성이 가능한 방법으로 노력해요.',
    ],
  },
  BABA: {
    name: '정성 한 그릇을 손 끝으로 빚어내는 도예가',
    catchuText: BABATxt,
    reverse: CatchuDataKey.ABAB,
    shortDescription: [
      { content: '특유의 정서와 단단한 마음', type: TextType.special },
      { content: '을 가진 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '영화 사랑과 영혼처럼 로맨틱한 물레질... 특유의 정서와 단단한 마음을 가진 당신은 뜨거운 불도 견뎌내고 아름다운 작품으로 다시 태어나는 도예와 어울려요. 직접 만들어냈다는 ',
        type: TextType.normal,
      },
      {
        content: '성취감',
        type: TextType.special,
      },
      {
        content:
          '이 오늘의 행복이 될지도 몰라요. 차분한 손길로 빚어낸 도자기 한 점을 캐치미에 소개해보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '섬세한 감성과 예술적인 감각을 가득 지녔어요.',
      '기본적으로 차분한 분위기를 가졌어요. 의견을 말할 때는 한참 생각한 후 신중하게 이야기하는 편이에요.',
      '한번 결정한 것에는 망설임이 없어 강단있다는 표현이 어울려요.',
      '천천히 변화하는 것보다는 명확히 눈에 보이는 변화를 좋아해요.',
    ],
  },
  BABB: {
    name: '맛있는 건 정말 참을 수 없어~ 집밥 캐선생',
    catchuText: BABBTxt,
    reverse: CatchuDataKey.ABAA,
    shortDescription: [
      { content: '소소한 행복과 안정감', type: TextType.special },
      { content: '이 중요한 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '이리 와서 이거 좀 드셔보셔유! 입맛대로 끓이고 볶아낸 한 상 차림은 당신만을 위한 ',
        type: TextType.normal,
      },
      {
        content: '하루의 힐링',
        type: TextType.special,
      },
      {
        content:
          '이 될 거예요. 완전히 새로운 시도는 겁나지만 수많은 레시피가 기다리고 있으니 걱정 말아요. 일상 속 소소한 행복과 안정감이 중요한 당신은 영화 리틀 포레스트 속 주인공 같은 삶을 살고 있을지도 몰라요. 정성 가득한 오늘의 요리 한 접시를 캐치미에 기록해보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '남들이 내게 이래라저래라 하는 건 딱 질색! 알아서 척척 잘하고 스스로를 믿어요.',
      '취미 생활에 너무 오랜 기간을 쏟는 것보단 오늘의 즐거움을 바로 찾을 수 있는 게 좋아요.',
      '바깥 활동보단 아늑한 실내 활동을 선호해요.',
      '선구자가 되는 건 조금 두려워요. 모험보단 안정을 추구해요.',
    ],
  },
  BBAA: {
    name: '브레인스토밍과 썰전은 참을 수 없지, 독서 모임 우수 회원',
    catchuText: BBAATxt,
    reverse: CatchuDataKey.AABB,
    shortDescription: [
      { content: '의견을 전개하는데', type: TextType.special },
      { content: ' 거리낌이 없는 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content: '말과 글은 나의 힘! 의견을 전개하는 데 거리낌이 없는 당신은 ',
        type: TextType.normal,
      },
      {
        content: '예리하고 비판적인 사고',
        type: TextType.special,
      },
      {
        content: '에 강해요. 책 속의 생각거리들을 양분 삼아 사람들과 ',
        type: TextType.normal,
      },
      {
        content: '자유로운 대화',
        type: TextType.special,
      },
      {
        content:
          '를 나누는 것을 좋아하고 유의미한 모임을 꾸준히 이어가려 해요. 오늘의 한 구절과 떠오른 생각을 캐치미에 남겨보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '지적 호기심이 높아 새롭게 배우는 것을 좋아해요. 똑똑해지는 기분:)',
      '조용한 공간을 좋아하고 마음속의 에너지가 가득해요.',
      '성실함이 가장 큰 무기예요. 꼼꼼하고 책임감 있게 일 처리를 하는 모습과 맞물려 취미 활동을 할 때도 신중함이 돋보여요.',
      '여러 사람과 다양한 의견을 나누는 데에 시간을 할애하는 편이에요.',
    ],
  },
  BBAB: {
    name: '교양 충전, 환상의 하모니를 연주하는 오케스트라 단원',
    catchuText: BBABTxt,
    reverse: CatchuDataKey.AABA,
    shortDescription: [
      { content: '아름다운 선율', type: TextType.special },
      { content: '을 즐기는 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '웅장한 박수 소리와 반짝이는 악기들... 아름다운 선율을 즐기는 당신은 그 안에서 정확하고 부드러운 음을 낼 수 있을지도 몰라요. ',
        type: TextType.normal,
      },
      {
        content: '여러 사람들과 함께 협동',
        type: TextType.special,
      },
      {
        content: '하는 것에 탁월하고 모두가 ',
        type: TextType.normal,
      },
      {
        content: '더 나은 방향',
        type: TextType.special,
      },
      {
        content:
          '으로 나아갈 수 있도록 방향을 제시해주는 역할에 딱이에요! 당신만의 화음으로 고막을 녹여버릴 음악을 캐치미에서 소개해보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      `많은 사람들과 신뢰를 두텁게 쌓아 올릴 수 있어요. ‘너라면 믿을 수 있지'라는 말을 자주 듣지는 않나요?`,
      '밖에 오래 있으면 금방 피곤해지지만 집에선 최고의 컨디션!',
      '원하는 목표를 세우면 어떻게든 달성하도록 노력해요.',
      '현실적인 고민을 많이 하는 편이고 나에게 도움이 될 수 있는 취미를 더 좋아해요.',
    ],
  },
  BBBA: {
    name: '나만의 세계를 써내려가는 작가, 조앤 캐츄 롤링?',
    catchuText: BBBATxt,
    reverse: CatchuDataKey.AAAB,
    shortDescription: [
      { content: '조용하지만 ', type: TextType.normal },
      { content: '창의적인', type: TextType.special },
      { content: ' 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '가장 못 하는 건 아무 생각도 안 하기! 지나가다 본 사람이든 일상 속 익숙한 물건이든 ',
        type: TextType.normal,
      },
      {
        content: '저마다의 스토리',
        type: TextType.special,
      },
      {
        content:
          '를 떠올려 본 적은 없나요? 겉으로 볼 때는 조용한 당신이라도, 누구보다 창의적인 생각이 당신의 머릿속을 가득 채우고 있을 거예요. 그 신비로운 세계를 매일 캐치미에서 기록해보세요.',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '새로운 것에 거리낌이 없고 호기심이 많아서 매사를 그냥 지나치지 않아요.',
      '나만의 세계를 표현할 수 있는 공간을 중요하게 생각해요.',
      '귀가 얇다는 말은 뭐지? 다른 사람들에게 쉽게 동조하지 않고 나의 의견을 적극적으로 제시하는 편이에요.',
      '높은 집중력으로 장기적인 일을 해내는 데 강해요.',
    ],
  },
  BBBB: {
    name: '한 땀마다 따숩게, 겨울을 기다리는 뜨개질 마스터',
    catchuText: BBBBTxt,
    reverse: CatchuDataKey.AAAA,
    shortDescription: [
      { content: '어른스럽고 침착한', type: TextType.special },
      { content: ' 당신', type: TextType.normal },
    ],
    longDescription: [
      {
        content:
          '왠지 모를 포근함이 느껴져요. 혼자만의 공간에 대한 애정이 크고, ',
        type: TextType.normal,
      },
      {
        content: '잔잔하고 안정적인',
        type: TextType.special,
      },
      {
        content:
          ' 라이프를 추구하는 당신! 꾸준한 노력을 담아 무언가를 완성하는 데에는 뜨개질만 한 게 없죠. 캐치미에서 매일의 힐링을 키워보는 건 어떨까요?',
        type: TextType.normal,
      },
    ],
    characteristics: [
      '바깥은 위험해! 편안한 실내 공간에서 가장 안정을 느껴요.',
      '이런저런 걱정이 많은 편이라 모험은 즐기지 않아요.',
      '혼자만의 시간은 보장받고 싶어요. 친구들과 함께 하는 것보다는 혼자 집중할 수 있는 일을 취미로 두는 편이에요.',
      '잠깐 즐기고 금방 끝나버리는 일은 조금 허무해요. 오랜 노력이 만들어낸 결과물이 더욱 빛난다고 생각해요.',
    ],
  },
};

import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

const AboutRecordSection = () => (
  <StAboutSection>
    <StAboutTitle>활동을 기록해요!</StAboutTitle>
    <div style={{ height: 26 }} />
    <img
      src='/static/images/img-about-activity.png'
      alt='calendar'
      height={243}
    />
    <div style={{ height: 24 }} />
    <StAboutDescription>
      나의 여러 모습을 담은 부캐들을 캐릭터로 표현하고, {'\n'}각 부캐 활동을
      기록할 수 있어요. 귀여운 캐츄의 이미지와 {'\n'}이름을 설정해 나만의
      캐릭터를 만들고, 활동한 날짜, 내용, {'\n'}사진을 기록해 생생하게 기억해요.
    </StAboutDescription>
  </StAboutSection>
);

export default AboutRecordSection;

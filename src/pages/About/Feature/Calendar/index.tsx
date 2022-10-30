import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

const AboutCalendarSection = () => (
  <StAboutSection>
    <StAboutTitle>캘린더로 확인해요!</StAboutTitle>
    <div style={{ height: 26 }} />
    <StAboutDescription>
      내 일상 속 캐릭터 활동을 캘린더로 한눈에{'\n'}확인할 수 있어요. 이번 달
      가장 많이 활동한 캐츄와{'\n'} 함께 매일의 기록을 확인해요.
    </StAboutDescription>
    <div style={{ height: 41 }} />
    <img
      src='/static/images/img-about-calendar.png'
      alt='calendar'
      width={251}
      height={219}
    />
  </StAboutSection>
);

export default AboutCalendarSection;

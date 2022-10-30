import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

const AboutCommunitySection = () => (
  <StAboutSection>
    <StAboutTitle>다른 캐츄를 구경해요!</StAboutTitle>
    <div style={{ height: 26 }} />
    <StAboutDescription>
      다른 친구들은 어떤 활동을 하는지 구경할 수 있어요.{'\n'}다양한 캐츄와
      활동을 보며{'\n'}새로운 나를 발견할 기회도 얻을 수 있을 거예요.
    </StAboutDescription>
    <div style={{ height: 41 }} />
    <img
      src='/static/images/img-about-community.png'
      alt='calendar'
      height={219}
    />
  </StAboutSection>
);

export default AboutCommunitySection;

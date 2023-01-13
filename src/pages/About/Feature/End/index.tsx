import AppDownloadButton from '../../../../components/AppDownloadButton';
import ChatbubbleShining from '../../../../components/Chatbubble/Shining';
import HomeLinkButton from '../../../../components/HomeLinkButton';
import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

const AboutSectionEnd = () => (
  <StAboutSection>
    <ChatbubbleShining text='캐치미는..?' />
    <div style={{ height: 13 }} />
    <StAboutTitle>캐치미, 함께해요!</StAboutTitle>
    <div style={{ height: 45 }} />
    <StAboutDescription>
      여러분은 어떤 모습으로 매일을 채우시겠어요?{'\n'}수많은 우리가 서로
      다르듯이, 내 안에도 다양한{'\n'}캐츄들이 있을 거예요. 캐치미는 우리의 이런
      {'\n'}다양한 모습이 모여 다채로운 '나'를 이루길 바라요.{'\n'}다양한 매일을
      채워나가고 싶다면,{'\n'}함께 CatchMe해요!
    </StAboutDescription>
    <div style={{ height: 68 }} />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <AppDownloadButton />
      <HomeLinkButton />
    </div>
  </StAboutSection>
);

export default AboutSectionEnd;

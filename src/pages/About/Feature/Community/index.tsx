import React from 'react';
import ChatbubbleShining from '../../../../components/Chatbubble/Shining';
import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

function AboutCommunitySection() {
  return (
    <StAboutSection>
      <ChatbubbleShining text='구경하기' />
      <div style={{ height: 13 }} />
      <StAboutTitle>
        다른 유저들은 어떤 캐릭터로{'\n'}활동하는지 구경해요!
      </StAboutTitle>
      <div style={{ height: 26 }} />
      <StAboutDescription>
        공개 설정된 모든 캐릭터는 구경하기에서 확인할{'\n'}수 있습니다. 다른
        유저들의 다양한 모습으로부터 새로운 나를{'\n'}발견할 기회를 얻을 수
        있으리라 기대합니다.
      </StAboutDescription>
      <div style={{ height: 41 }} />
      <img
        src='/static/images/img-about-community.png'
        alt='calendar'
        height={219}
      />
    </StAboutSection>
  );
}

export default AboutCommunitySection;

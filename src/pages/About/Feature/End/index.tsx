import React from 'react';
import AppDownloadButton from '../../../../components/AppDownloadButton';
import ChatbubbleShining from '../../../../components/Chatbubble/Shining';
import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

function AboutSectionEnd() {
  return (
    <StAboutSection>
      <ChatbubbleShining text='캐치미는..?' />
      <div style={{ height: 13 }} />
      <StAboutTitle>당신에게{'\n'}전하고 싶은 이야기</StAboutTitle>
      <div style={{ height: 45 }} />
      <StAboutDescription>
        여러분은 어떤 모습으로 매일을 채우시겠어요?{'\n'}수많은 우리가 서로
        다르듯이,{'\n'}캐치미는 내 안에서도 서로 다른 캐츄들이 모여{'\n'}
        다채로운 나를 이루기 바랍니다.
      </StAboutDescription>
      <div style={{ height: 68 }} />
      <AppDownloadButton />
    </StAboutSection>
  );
}

export default AboutSectionEnd;

import React from 'react';
import ChatbubbleShining from '../../../../components/Chatbubble/Shining';
import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

function AboutRecordSection() {
  return (
    <StAboutSection>
      <ChatbubbleShining text='활동기록' />
      <div style={{ height: 13 }} />
      <StAboutTitle>
        내 속의 여러 부캐들을{'\n'}캐릭터로 표현하고, 기록해요!
      </StAboutTitle>
      <div style={{ height: 45 }} />
      <StAboutDescription>
        캐릭터 이미지, 이름 등을 설정해 해당 캐릭터에 대한{'\n'}기록을 남길 수
        있습니다. 활동한 날짜, 내용,{'\n'}사진 첨부로 보다 생생한 기록이
        가능합니다.
      </StAboutDescription>
    </StAboutSection>
  );
}

export default AboutRecordSection;

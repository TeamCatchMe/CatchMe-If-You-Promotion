import React from 'react';
import ChatbubbleShining from '../../../../components/Chatbubble/Shining';
import { StAboutDescription, StAboutSection, StAboutTitle } from '../../style';

function AboutCalendarSection() {
  return (
    <StAboutSection>
      <ChatbubbleShining text='캘린더' />
      <div style={{ height: 13 }} />
      <StAboutTitle>
        일상 속 캐릭터 활동들을{'\n'}캘린더에서 확인해요!
      </StAboutTitle>
      <div style={{ height: 26 }} />
      <StAboutDescription>
        이번 달 가장 많은 활동을 한 캐츄를 보여주고,{'\n'}언제 어떤 활동을
        했는지 확인할 수 있습니다.{'\n'}날짜를 클릭하면 그 날의 캐츄들이
        노출됩니다.
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
}

export default AboutCalendarSection;

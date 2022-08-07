import React from 'react';
import { useNavigate } from 'react-router';
import ChatbubbleShining from '../../components/Chatbubble/Shining';
import GlitterButton from '../../components/GlitterButton';
import { StAboutDescription, StAboutSection, StAboutTitle } from './style';

function AboutPage() {
  const navigate = useNavigate();
  return (
    <div>
      <StAboutSection>
        <ChatbubbleShining text='캐치미는..?' />
        <div style={{ height: 13 }} />
        <StAboutTitle>당신에게{'\n'}전하고 싶은 이야기</StAboutTitle>
        <div style={{ height: 45 }} />
        <StAboutDescription>
          캐치미는 우주같은 마음 속 숨어있는{'\n'}내 모습들을 잡아내자는
          뜻입니다.{'\n'}최근 부캐라고 표현되는 나의 여러 모습들은{'\n'}캐츄라는
          이름으로 표현하고 있어요.{'\n'}캐츄 키우기와 함께, 관심사를 파악하고
          더 나은{'\n'}내 모습들로 일상을 채워보는 건 어떨까요?
        </StAboutDescription>
        <div style={{ height: 68 }} />
        <GlitterButton
          text='캐치미 사용방법'
          onClick={() => navigate('/about/feature')}
        />
      </StAboutSection>
    </div>
  );
}

export default AboutPage;

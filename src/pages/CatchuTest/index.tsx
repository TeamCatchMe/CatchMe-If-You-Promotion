import React from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonCatchutestStart,
  ImageCatchutestMain,
  ImageCatchutestStart,
} from '../../assets';
import { StCatchuTestWrapper, StText, StTextStrong } from './style';

function CatchuTestPage() {
  return (
    <StCatchuTestWrapper>
      <ImageCatchutestStart />
      <div style={{ marginBottom: 69 }}></div>
      <ImageCatchutestMain />
      <div style={{ marginBottom: 33 }}></div>
      <StText>흠, 나는 하고 싶은 게 너무 많아 💭..</StText>
      <StText>
        지금 바로 <StTextStrong>나에게 어울리는 부캐</StTextStrong>를 찾아보자!
      </StText>
      <div style={{ marginBottom: 40 }}></div>
      <Link to='./1'>
        <ButtonCatchutestStart />
      </Link>
    </StCatchuTestWrapper>
  );
}

export default CatchuTestPage;

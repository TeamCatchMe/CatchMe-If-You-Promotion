import React from 'react';
import { ImageLogo, ImageMain } from '../../assets';
import AppDownloadButton from '../../components/AppDownloadButton';
import {
  StMainLink,
  StMainWrapper,
  StMainText,
  StStrongText,
  StLinkWrapper,
} from './styles';

function MainPage() {
  return (
    <StMainWrapper>
      <ImageLogo width='248px' />
      <StMainText>
        나의 매일을 다채롭게, <StStrongText>캐치미</StStrongText>
      </StMainText>
      <ImageMain />
      <StLinkWrapper>
        <StMainLink to='/about'>캐치미를 알아보자!</StMainLink>
        <StMainLink to='/game'>캐치미 게임 월드(가제)</StMainLink>
      </StLinkWrapper>
      <AppDownloadButton />
    </StMainWrapper>
  );
}

export default MainPage;

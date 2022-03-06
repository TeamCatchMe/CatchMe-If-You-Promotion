import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import { ImageLogo, ImageMain } from '../../assets';
import { openStore } from '../../utils/openStore';
import {
  StDownloadButton,
  StMainLink,
  StMainWrapper,
  StMainText,
  StStrongText,
  StLinkWrapper,
  StPlatformWrapper,
  StPlatformButton,
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
      {isAndroid || isIOS ? (
        <StDownloadButton
          onClick={() => openStore(isAndroid ? 'android' : 'iOS')}
        >
          캐치미 앱 다운로드
        </StDownloadButton>
      ) : (
        <StPlatformWrapper>
          <StPlatformButton onClick={() => openStore('iOS')}>
            iOS 앱 다운로드
          </StPlatformButton>
          <StPlatformButton onClick={() => openStore('android')}>
            안드로이드 앱 다운로드
          </StPlatformButton>
        </StPlatformWrapper>
      )}
    </StMainWrapper>
  );
}

export default MainPage;

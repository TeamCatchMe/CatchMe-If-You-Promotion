import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import { openStore } from '../../utils/openStore';
import { StDownloadButton, StPlatformButton, StPlatformWrapper } from './style';

function AppDownloadButton() {
  return (
    <>
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
    </>
  );
}

export default AppDownloadButton;

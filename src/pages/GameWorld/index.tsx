import React from 'react';
import { ImageLogo } from '../../assets';
import {
  StLinkWrapper,
  StMainAnchor,
  StMainLink,
  StMainText,
  StMainWrapper,
  StStrongText,
} from '../Main/styles';

function GameWorldPage() {
  return (
    <StMainWrapper>
      <ImageLogo width='248px' />
      <StMainText>
        나의 매일을 다채롭게, <StStrongText>캐치미</StStrongText>
      </StMainText>
      <StLinkWrapper>
        <StMainLink to='/test'>부캐 테스트</StMainLink>
        <StMainAnchor href='https://catchme-catchuris.netlify.app/'>
          캐츄리스
        </StMainAnchor>
        <StMainAnchor href='/game' disabled>
          캐더지 잡기 - 준비중!
        </StMainAnchor>
      </StLinkWrapper>
    </StMainWrapper>
  );
}

export default GameWorldPage;

import { imageGameWorld } from '../../assets';
import HomeLinkButton from '../../components/HomeLinkButton';
import { COLORS } from '../../styles/color';
import {
  StGameWorldMainText,
  StGameWorldWrapper,
  StImgGameWorld,
  StLinkWrapper,
  StMainAnchor,
  StMainLink,
} from '../Main/styles';

function GameWorldPage() {
  return (
    <StGameWorldWrapper>
      <StImgGameWorld
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 10%,
              ${COLORS.BLACK_100} 90%), url(${imageGameWorld})`,
        }}
      />
      <StGameWorldMainText>캐치미 게임 월드</StGameWorldMainText>
      <StLinkWrapper>
        <StMainLink to='/test'>부캐 찾기 테스트</StMainLink>
        <StMainAnchor href='https://catchme-catchuris.netlify.app/'>
          캐츄리스
        </StMainAnchor>
      </StLinkWrapper>
      <HomeLinkButton />
    </StGameWorldWrapper>
  );
}

export default GameWorldPage;

import { IcHome } from '../../assets';
import { StHomeLink } from './style';

function HomeLinkButton() {
  return (
    <StHomeLink to='/'>
      <IcHome />
      <div>메인으로</div>
    </StHomeLink>
  );
}

export default HomeLinkButton;

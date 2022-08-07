import { BgButtonGlitterPink } from '../../assets';
import { StGlitterButton } from './style';

function GlitterButton(props: { text: string; onClick: () => void }) {
  return (
    <StGlitterButton onClick={props.onClick}>
      <BgButtonGlitterPink />
      <div>{props.text}</div>
    </StGlitterButton>
  );
}

export default GlitterButton;

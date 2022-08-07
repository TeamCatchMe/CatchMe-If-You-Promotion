import styled from 'styled-components';
import { COLORS } from '../../styles/color';

export const StGlitterButton = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 18px 45px;
  background-color: ${COLORS.PINK_200};
  border-radius: 30px;
  border: 2px solid ${COLORS.PINK_100};
  box-shadow: inset 0 1px 4px 0px ${COLORS.PINK_300};
  cursor: pointer;
  & > svg {
    position: absolute;
    top: 6px;
    left: 14px;
  }
  & > div {
    font-family: 'BMJUA';
    font-size: 24px;
  }
`;

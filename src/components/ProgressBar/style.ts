import styled from 'styled-components';
import { COLORS } from '../../styles/color';

export const StProgressBar = styled.div<{ total: number; current: number }>`
  width: 100%;
  height: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  padding-left: 3px;
  background: #464646;
  box-shadow: inset 0px 3px 2px rgba(24, 20, 21, 0.19),
    inset 0px -1px 1px #272727;

  & > div {
    width: ${({ total, current }) => `calc(100% * ${current} / ${total})`};
    height: 7px;
    background-color: ${COLORS.PINK_200};
    border-radius: 3px;
    background: #ff4882;
    box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.11),
      inset 0px 3px 3px rgba(255, 255, 255, 0.19);
  }
`;

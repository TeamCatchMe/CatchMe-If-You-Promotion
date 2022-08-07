import styled from 'styled-components';
import { COMMON_STYLES } from '../../styles/common';

export const StPlatformButton = styled.div`
  ${COMMON_STYLES.BUTTON_PINK};
  width: 100%;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
`;

export const StPlatformWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: calc(100% - 40px);
  gap: 10px;
`;

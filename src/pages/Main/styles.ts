import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/color';
import { COMMON_STYLES } from '../../styles/common';

export const StMainWrapper = styled.div`
  ${COMMON_STYLES.FLEX_CENTER_FULL};
  padding-top: 64px;
`;

export const StGameWorldWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StMainLink = styled(Link)`
  ${COMMON_STYLES.BUTTON_GRAY};
  width: calc(100% - 40px);
`;

export const StMainAnchor = styled.a<{ disabled?: boolean }>`
  ${COMMON_STYLES.BUTTON_GRAY};
  width: calc(100% - 40px);
  ${({ disabled }) => disabled && `color:${COLORS.GRAY_050}`}
`;

export const StMainText = styled.div`
  font-size: 16px;
  line-height: 20.03px;
  letter-spacing: -0.6px;
  margin-top: 8px;
  margin-bottom: 33px;
`;

export const StGameWorldMainText = styled.div`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -1px;
  margin-top: -30px;
  margin-left: 20px;
`;

export const StStrongText = styled.strong`
  font-weight: 700;
`;

export const StLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 49px;
  margin-bottom: 45px;
  gap: 20px;
`;

export const StImgGameWorld = styled.div`
  width: 100%;
  height: 375px;
  background-size: 518px 481px;
  background-position: center -84px;
`;

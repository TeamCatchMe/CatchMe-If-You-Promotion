import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COMMON_STYLES } from '../../styles/common';

export const StMainWrapper = styled.div`
  ${COMMON_STYLES.FLEX_CENTER_FULL};
  padding-top: 64px;
`;

export const StMainLink = styled(Link)`
  ${COMMON_STYLES.BUTTON_GRAY};
  width: calc(100% - 40px);
`;

export const StMainText = styled.div`
  font-size: 16px;
  line-height: 20.03px;
  letter-spacing: -0.6px;
  margin-top: 8px;
  margin-bottom: 33px;
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

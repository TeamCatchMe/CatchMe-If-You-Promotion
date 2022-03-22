import styled from 'styled-components';
import { COLORS } from '../../styles/color';
import { COMMON_STYLES } from '../../styles/common';

export const StCatchuTestWrapper = styled.div`
  ${COMMON_STYLES.FLEX_CENTER_FULL};
  padding-top: 118px;
`;

export const StText = styled.div`
  line-height: 22px;
  letter-spacing: -0.6px;
  font-size: 16px;
`;

export const StTextStrong = styled.strong`
  font-size: 18px;
`;

export const StQuestion = styled.div`
  font-size: 21px;
  letter-spacing: -0.4px;
  line-height: 27px;
  height: 54px;
  width: 100%;
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 81px;
  font-family: 'BMJUA';
`;

export const StAnswer = styled.div`
  background-color: ${COLORS.BLACK_200};
  border-radius: 10px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 12px;
  white-space: pre-wrap;
  text-align: center;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.6px;
`;

import styled from 'styled-components';
import { TextType } from '../../data/catchutest-map';
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

export const StShortDescription = styled.span<{ type: TextType }>`
  font-family: 'BMJUA';
  padding: 2px 0;
  font-size: 20px;
  line-height: 30px;
  ${({ type }) =>
    type === TextType.special &&
    `padding: 2px 5px;
     background-color: ${COLORS.PINK_210};
     border-radius: 6px;   
  `}
`;

export const StShortDescriptionWrapper = styled.div`
  padding-top: 28px;
  padding-bottom: 15px;
`;

export const StLongDescriptionWrapper = styled.div<{ center?: boolean }>`
  padding: 20px 16px;
  background-color: #2f2f2f;
  border-radius: 10px;
  margin-bottom: 13px;
  ${({ center }) =>
    center &&
    `display: flex;
  flex-direction: column;
  align-items: center;`}
`;

export const StLongDescription = styled.span<{ type: TextType }>`
  color: #f2f2f2;
  font-size: 16px;
  line-height: 29px;
  position: relative;
  word-break: keep-all;
  ${({ type }) =>
    (type === TextType.special || type === TextType.ultra) &&
    `
    color: #FFFFFF;
    font-weight: 600;
    border-bottom: 2px solid ${COLORS.PINK_210};
  `}
  ${({ type }) =>
    type === TextType.ultra &&
    `
    padding-right: 2px;
    &::after {
      position: absolute;
      top: -14px;
      right: -2px;
      color: ${COLORS.PINK_210};
      content: '*';
      font-size: 18px;
    }
  `}
`;

export const StCatchuText = styled.img<{ reverse?: boolean }>`
  max-height: 50px;
  width: auto;
  ${({ reverse }) => reverse && `max-height: 34px;`}
`;

export const StCatchuImage = styled.img<{ reverse?: boolean }>`
  max-height: 168px;
  width: auto;
  ${({ reverse }) => reverse && `max-height: 100px;`}
`;

export const StTextResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 68px 20px;
  box-sizing: border-box;
`;

export const StCharacteristicList = styled.li`
  font-size: 16px;
  line-height: 23px;
`;

export const StCharacteristicListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 17px auto;
  gap: 10px 0;
  word-break: keep-all;
`;

export const StDot = styled.div`
  background-color: #4d4d4c;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-top: 9px;
`;

export const StShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StShareButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 19px;
  & > div {
    background-color: rgba(196, 196, 196, 1);
    border-radius: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const StRetryButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 30px;
  & > div {
    border-bottom: 1px solid white;
    font-size: 17px;
    cursor: pointer;
  }
`;

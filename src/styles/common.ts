import { css } from 'styled-components';
import { COLORS } from './color';

export const COMMON_STYLES = {
  FLEX_CENTER_FULL: css`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
  `,
  BUTTON_GRAY: css`
    background-color: ${COLORS.BLACK_200};
    border-radius: 13px;
    text-align: center;
    font-size: 16px;
    padding: 17px 0;
    line-height: 20px;
  `,
  BUTTON_GRAY_ROUNDED_BORDERED: css`
    background-color: ${COLORS.BLACK_200};
    border: 1px solid ${COLORS.GRAY_300};
    border-radius: 25px;
    display: flex;
    gap: 6px;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    padding: 0 50px;
  `,
  BUTTON_PINK: css`
    background-color: ${COLORS.PINK_100};
    border-radius: 25px;
    text-align: center;
    font-size: 14px;
    padding: 16px 34.5px;
  `,
};

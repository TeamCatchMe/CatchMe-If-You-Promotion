import styled from 'styled-components';

export const StAboutSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const StAboutTitle = styled.div`
  font-family: 'BMJUA';
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.6px;
  text-align: center;
  white-space: pre-wrap;
`;

export const StAboutDescription = styled.div`
  line-height: 28px;
  letter-spacing: -0.6px;
  font-size: 16px;
  white-space: pre-wrap;
  text-align: center;
  color: rgba(239, 239, 239, 1);
`;

export const StBtnDownWrapper = styled.div`
  position: fixed;
  bottom: 26px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

export const StAboutWrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth;
`;

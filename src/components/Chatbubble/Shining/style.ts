import styled from 'styled-components';

export const StChatbubbleShining = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  & > div {
    font-family: 'Cafe24Ohsquareair';
    font-size: 14px;
    z-index: 1;
  }
  & > svg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;

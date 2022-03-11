import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  & > svg {
    width: 156px;
    height: 36px;
  }
`;

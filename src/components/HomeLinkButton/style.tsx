import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COMMON_STYLES } from '../../styles/common';

export const StHomeLink = styled(Link)`
  ${COMMON_STYLES.BUTTON_GRAY_ROUNDED_BORDERED};
  align-self: center;
`;

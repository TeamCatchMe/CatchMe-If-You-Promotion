import React from 'react';
import { ImageLogo } from '../../assets';
import { HeaderWrapper } from './style';

function Header() {
  return (
    <HeaderWrapper to='/'>
      <ImageLogo />
    </HeaderWrapper>
  );
}

export default Header;

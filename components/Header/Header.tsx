import React from 'react';
import Navigation from '../Navigation/Navigation';
import HeaderWrapper from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;

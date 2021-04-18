import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import { Link } from 'gatsby';
import { Logo2 } from '../Logo2';
import { Navigation } from '../Navigation';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo2 />
        </Link>
      </div>
      <Cart />
      <Navigation />
    </HeaderWrapper>
  );
}

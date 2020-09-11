import React from 'react';
import Link from 'next/link';
import {
  NavigationWrapper,
  NavigationLogo,
  NavigationList,
  NavigationListItem,
} from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <NavigationLogo>Blog</NavigationLogo>
      <NavigationList>
        <NavigationListItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link href="/posts/new">
            <a>Create Post</a>
          </Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;

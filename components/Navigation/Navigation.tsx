import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/new">
            <a>Create Post</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

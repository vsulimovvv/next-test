import Link from 'next/link';
import React from 'react';
import { Navigation } from './Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export const Header = () => {
  return (
    <header className="w-full bg-neutral-800">
      <div className="container">
        <div className="flex items-center justify-center gap-5 p-5">
          <Navigation navLinks={navItems} />
        </div>
      </div>
    </header>
  );
};

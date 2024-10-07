'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? 'text-orange-500' : ''}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };

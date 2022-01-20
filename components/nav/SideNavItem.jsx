import React from 'react';
import Link from 'next/link';

export default function SideNavItem(props) {
  const { children, title, link, isActive } = props;

  return (
    <Link href={link}>
      <a href={link}>
        <div className="flex justify-center">{children}</div>
        <p className={`text-center ${isActive ? 'text-primary-600' : 'text-hint-text'}`}>{title}</p>
      </a>
    </Link>
  );
}

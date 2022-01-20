import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <Link href="/">
        <a href="/">Home</a>
      </Link>

      <Link href="/topic-modeling">
        <a href="/topic-modeling">Topic Modeling</a>
      </Link>
    </div>
  );
}

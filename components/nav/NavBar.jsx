import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SearchBar from '../secondary/NavSearchBar';
import NavMenu from './NavMenu';

export default function NavBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleChange = value => {
    setQuery(value);
  };

  const handleSubmit = () => {
    router.push({
      pathname: `/`,
      query: { query },
    });
  };

  return (
    <div className="flex justify-between py-6 px-8">
      <div className="w-8/12">
        <SearchBar placeHolder="Search" query={query} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
      <div className="self-center">
        <NavMenu />
      </div>
    </div>
  );
}

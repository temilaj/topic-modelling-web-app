import React from 'react';
import { useRouter } from 'next/router';

import HomeIcon from '../icons/Home';
import CompareIcon from '../icons/Compare';
import DatabaseIcon from '../icons/Database';
import LogOutIcon from '../icons/LogOut';
import SideNavItem from './SideNavItem';

export default function SideNav() {
  const router = useRouter();

  return (
    <div className="hidden sm:flex flex-col top-0 left-0 w-20 bg-gray-300 h-screen pt-10 z-10">
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="space-y-6">
          <li>
            <SideNavItem title="Home" link="/home" isActive={router.asPath.startsWith('/home')}>
              <HomeIcon isActive={router.asPath.startsWith('/home')} />
            </SideNavItem>
          </li>
          <li>
            <SideNavItem title="Compare" link="/compare" isActive={router.asPath.startsWith('/compare')}>
              <CompareIcon isActive={router.asPath.startsWith('/compare')} />
            </SideNavItem>
          </li>
          <li>
            <SideNavItem title="Database" link="/database" isActive={router.asPath.startsWith('/database')}>
              <DatabaseIcon isActive={router.asPath.startsWith('/database')} />
            </SideNavItem>
          </li>
        </ul>
      </div>
      <div className="text-center pb-8 pt-4">
        <button onClick={() => {}} className="h-full" type="button">
          <div className="">
            <LogOutIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

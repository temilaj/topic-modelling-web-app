import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import NavBar from './NavBar';

function Header(props) {
  const { fixed } = props;
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  return (
    <header {...(fixed ? { className: 'w-full fixed justify-end bg-white shadow z-20' } : {})}>
      <NavBar />
    </header>
  );
}
export default Header;

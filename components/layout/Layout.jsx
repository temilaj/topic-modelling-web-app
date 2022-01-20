import React from 'react';

import Header from '../nav/Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

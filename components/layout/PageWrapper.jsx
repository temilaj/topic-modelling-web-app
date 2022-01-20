import React from 'react';

import Layout from './Layout';
import Metatags from './Metatags';

export default function PageWrapper(props) {
  return (
    <>
      <Metatags />
      <Layout>{props.children}</Layout>
    </>
  );
}

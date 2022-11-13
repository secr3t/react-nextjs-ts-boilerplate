import React from 'react';

import type { NextPage } from 'next';

/* const DynamicImportComponent = dynamic(
  async () => await import('something to dynamic import'),
  {
    ssr: false,
  },
); */

const Home: NextPage = () => {
  return (
    <main
      id="wrapper"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
    </main>
  );
};

export default Home;

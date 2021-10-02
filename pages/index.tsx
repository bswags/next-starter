import type { NextPage } from 'next';

import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <div className="p-8">
        <h1 className="text-xl">let&apos;s go</h1>
      </div>
    </>
  );
};

export default Home;

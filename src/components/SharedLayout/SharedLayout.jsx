import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/NavBar/NavBar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/NavBar/NavBar';
import styles from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <>
      <div className={StyleSheet.navbar}>
        <Navbar />
      </div>
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

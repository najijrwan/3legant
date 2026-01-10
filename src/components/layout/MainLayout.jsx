// layout/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import { NavBar, NotificationBar } from '@layout';
import { Newsletter } from '@newsletter';
import { Footer } from '@footer';

const MainLayout = () => {
  return (
    <>
      <NotificationBar />
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayout;
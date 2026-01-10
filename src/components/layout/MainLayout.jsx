// layout/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import { NavBar, NotificationBar } from '@layout';
import { Newsletter } from '@newsletter';
import { Footer } from '@footer';

const MainLayout = () => {
  return (
    <>
      <NotificationBar />
      
      <main
        data-id='main'
      >
        <Outlet />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayout;
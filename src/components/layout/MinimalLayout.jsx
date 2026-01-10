// layout/MinimalLayout.jsx
import { Outlet } from 'react-router-dom';
import { NavBar, NotificationBar } from '@layout';
import { Footer } from '@footer';

const MinimalLayout = () => {
  return (
    <>
      <NotificationBar mobileOnly />
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MinimalLayout;


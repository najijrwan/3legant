// layout/MinimalLayout.jsx
import { NavBar, NotificationBar } from '@navigation';
import Footer from '@footer/Footer';

const MinimalLayout = ({ children, onMenuOpen, onCartOpen }) => {
  return (
    <>
      <NotificationBar className='2xl:hidden' />

      <NavBar
        onMenuOpen={onMenuOpen}
        onCartOpen={onCartOpen}
      />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MinimalLayout;


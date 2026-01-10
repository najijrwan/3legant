// layout/MinimalLayout.jsx
import { NavBar, NotificationBar } from '@layout';
import { Footer } from '@footer';

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


import { NotificationBar, NavBar } from '@navigation';
import { Newsletter } from '@newsletter';
import { Footer } from '@footer';

const MainLayout = ({ children, onMenuOpen, onCartOpen }) => {
  return (
    <>
      <NotificationBar />

      <NavBar
        onMenuOpen={onMenuOpen}
        onCartOpen={onCartOpen}
      />

      <main>
        {children}
      </main>

      <Newsletter />
      
      <Footer />
    </>
  );
};


export default MainLayout;
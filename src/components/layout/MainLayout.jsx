import { NotificationBar, NavBar } from '@navigation';
import { Newsletter } from '@newsletter/Newsletter';
import { Footer } from '@footer/Footer';

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
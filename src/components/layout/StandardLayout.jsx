import { NavBar } from '@navigation';
import { Newsletter, Footer } from '@footer';

const StandardLayout = ({ children, onMenuOpen, onCartOpen }) => {
    return (
        <>
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

export default StandardLayout;

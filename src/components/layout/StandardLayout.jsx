import { NavBar } from '@navigation';
import { Newsletter } from '@newsletter';
import { Footer } from '@footer';

const StandardLayout = ({ children, onMenuOpen, onCartOpen }) => {
    return (
        <>
            <NavBar
                onMenuOpen={onMenuOpen}
                onCartOpen={onCartOpen}
            />

            <main className="w-full">
                {children}
            </main>

            <Newsletter />
            <Footer />
        </>
    );
};

export default StandardLayout;

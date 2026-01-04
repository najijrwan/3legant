import { useState } from 'react';
import { Container, NotificationBar, NavBar, FlyMenu, FlyoutCart } from '@layout';

const Layout = ({ children }) => {
    const [isFlyMenuOpen, setFlyMenuOpen] = useState(false);
    const [isFlyoutCartOpen, setFlyoutCartOpen] = useState(false);

    return (
        <Container>

            <NotificationBar />

            <NavBar
                onMenuOpen={() => setFlyMenuOpen(true)}
                onCartOpen={() => setFlyoutCartOpen(true)}
            />

            <FlyMenu
                isOpen={isFlyMenuOpen}
                onClose={() => setFlyMenuOpen(false)}
            />

            <FlyoutCart
                isOpen={isFlyoutCartOpen}
                onClose={() => setFlyoutCartOpen(false)}
            />

            {isFlyMenuOpen && (
                <div
                    data-id="overlay"
                    className="fixed inset-0 bg-black/32 z-10"
                    onClick={() => setFlyMenuOpen(false)}
                />
            )}

            <main
                data-id='main'
                className='
                w-full px-8 2xl:px-40'>
                {children}
            </main>

        </Container>
    );
};

export default Layout;
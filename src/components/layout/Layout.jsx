import { useState } from 'react';
import { Container, NotificationBar, NavBar, FlyMenu, FlyoutCart } from '@layout';

const Layout = ({ children }) => {
    const [isFlyMenuOpen, setFlyMenuOpen] = useState(false);
    const [isFlyoutCartOpen, setFlyoutCartOpen] = useState(false);
    const isAnyPanelOpen = isFlyMenuOpen || isFlyoutCartOpen;

    return (
        <Container>

            <NotificationBar />

            <NavBar
                onMenuOpen={() => setFlyMenuOpen(true)}
                onCartOpen={() => setFlyoutCartOpen(true)}
            />

            <FlyMenu
                isOpen={isFlyMenuOpen}
                onCartOpen={() => setFlyoutCartOpen(true)}
                onClose={() => setFlyMenuOpen(false)}
            />

            <FlyoutCart
                isOpen={isFlyoutCartOpen}
                onClose={() => setFlyoutCartOpen(false)}
            />

            {isAnyPanelOpen && (
                <div
                    className="fixed inset-0 bg-black/32 z-10"
                    onClick={() => {
                        setFlyMenuOpen(false);
                        setFlyoutCartOpen(false);
                    }}
                />
            )}

            <main
                data-id='main'
                className='
                w-full'>
                {children}
            </main>

        </Container>
    );
};

export default Layout;
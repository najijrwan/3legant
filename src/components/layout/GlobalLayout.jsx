import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FlyMenu, FlyoutCart } from '@navigation';
import { Container } from '@layout';

const GlobalLayout = ({ Shell }) => {
    const [isFlyMenuOpen, setFlyMenuOpen] = useState(false);
    const [isFlyoutCartOpen, setFlyoutCartOpen] = useState(false);
    const isAnyPanelOpen = isFlyMenuOpen || isFlyoutCartOpen;

    return (
        <Container>
            <Shell
                onMenuOpen={() => setFlyMenuOpen(true)}
                onCartOpen={() => setFlyoutCartOpen(true)}
            >
                <Outlet />
            </Shell>

            <FlyMenu
                isOpen={isFlyMenuOpen}
                onClose={() => setFlyMenuOpen(false)}
                onCartOpen={() => setFlyoutCartOpen(true)}
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
        </Container>
    );
};


export default GlobalLayout;

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, FlyMenu, FlyoutCart } from '@layout';

const GlobalLayout = ({ children, Shell }) => {
    const [isFlyMenuOpen, setFlyMenuOpen] = useState(false);
    const [isFlyoutCartOpen, setFlyoutCartOpen] = useState(false);
    const isAnyPanelOpen = isFlyMenuOpen || isFlyoutCartOpen;

    return (
        <>
            <NavBar
                onMenuOpen={() => setFlyMenuOpen(true)}
                onCartOpen={() => setFlyoutCartOpen(true)}
            />

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

            {/* Structural shell renders the page layout */}
            <Shell>
                <Outlet />
            </Shell>
        </>
    );
};

export default GlobalLayout;

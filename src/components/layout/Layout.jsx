import { useState } from 'react';
import { Container, NotificationBar, NavBar, FlyMenu } from '@layout';

const Layout = ({ children }) => {
    const [isFlyMenuOpen, setFlyMenuOpen] = useState(false);

    return (
        <Container>

            <NotificationBar />

            <NavBar onMenuOpen={() => setFlyMenuOpen(true)} />

            {isFlyMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        data-id='overlay'
                        className="fixed inset-0 bg-black/32 z-10"
                        onClick={() => setFlyMenuOpen(false)}
                    />

                    {/* FlyMenu */}
                    <FlyMenu onClose={() => setFlyMenuOpen(false)} />
                </>
            )}

            <main
                className='
                w-full px-8 2xl:px-40'>
                {children}
            </main>

        </Container>
    );
};

export default Layout;
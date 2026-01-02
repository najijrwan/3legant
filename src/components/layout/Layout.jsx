import { Container, NotificationBar, NavBar } from '@layout';

const Layout = ({ children }) => {
    return (
        <Container>

            <NotificationBar />

            <NavBar />

            <main>
                {children}
            </main>

        </Container>
    );
};

export default Layout;
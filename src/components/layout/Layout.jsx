import { Container, NotificationBar, NavBar } from '@layout';

const Layout = ({ children }) => {
    return (
        <Container>

            <NotificationBar />

            <NavBar />

            <main
                className='
                w-full px-8 2xl:px-40'>
                {children}
            </main>

        </Container>
    );
};

export default Layout;
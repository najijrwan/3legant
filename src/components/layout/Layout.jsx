import { Container, NotificationBar, NavBar } from '@layout';

const Layout = ({ children }) => {
    return (
        <Container>
            <NotificationBar />
            <NavBar />
            {children}
        </Container>
    );
};

export default Layout;
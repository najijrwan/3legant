import { Container, NotificationBar } from '@layout';

const Layout = ({ children }) => {
    return (
        <Container>
            <NotificationBar />
            {children}
        </Container>
    );
};

export default Layout;
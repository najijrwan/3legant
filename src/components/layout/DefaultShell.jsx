import { Outlet } from 'react-router-dom';
import { NotificationBar, NavBar } from '@layout';

const DefaultShell = () => {
    return (
        <>
            <NotificationBar />
            <NavBar />
            <Outlet />
        </>
    );
};

export default DefaultShell;

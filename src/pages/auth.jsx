import { useNavigate } from "react-router-dom";
import { AuthPopup } from '@auth';

const AuthPage = () => {
    const navigate = useNavigate();

    return (
        <AuthPopup
            title="Sign Up"
            onButtonClick={() => navigate('/')}
        />
    );
};

export default AuthPage;
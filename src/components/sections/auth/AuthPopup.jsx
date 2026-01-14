import { useState } from 'react';
import Container from '@layout/Container.jsx';
import { SignUpForm, SignInForm } from '@auth';

const AuthPopup = ({ title, onButtonClick }) => {

    const [mode, setMode] = useState('signup');

    const isSignup = mode === 'signup';

    return (
        <Container
            data-id={title}
            className="
            2xl:flex 2xl:gap-22"
        >

            {/* Image & Brand */}
            <div
                data-id='image&brand'
                className='
                relative 
                w-full 2xl:w-[50%]
                flex items-center justify-center
                bg-n2100'
            >
                <header
                    onClick={onButtonClick}
                    className='
                    absolute top-8 right-1/2 translate-x-1/2
                    text-(--primary) text-2xl leading-6 tracking-[0] font-poppins font-medium'>
                    3legant<span className="text-(--neutral-4-100)">.</span>
                </header>
                <img
                    src="src/assets/images/Paste image.png"
                    alt=""
                    className='h-[430px] 2xl:h-auto'
                />
            </div>

            {/* Form & Actions */}
            <div
                data-id='form&Actions'
                className="
                w-[311px] 2xl:w-[456px] mx-auto 2xl:mx-0 2xl:mt-55 py-10 2xl:py-0
                flex flex-col gap-8"
            >
                {/* Sign Up Or Sign In Navigation*/}
                <div
                    className="
                    flex flex-col gap-6"
                >
                    <header
                        className="
                        h4 text-(--neutral-7-100)">
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </header>

                    <p
                        className="
                        body-2 text-(--neutral-4-100)"
                    >
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}
                        <span
                            onClick={() =>
                                setMode(isSignup ? 'signin' : 'signup')
                            }
                            className="body-2-semi text-[var(--green)] cursor-pointer ml-1"
                        >
                            {isSignup ? 'Sign in' : 'Sign up'}
                        </span>
                    </p>
                </div>

                {/* Sign Up Or Sign In forms */}
                {isSignup ? <SignUpForm /> : <SignInForm />}
            </div>
        </Container>
    );
}

export default AuthPopup;
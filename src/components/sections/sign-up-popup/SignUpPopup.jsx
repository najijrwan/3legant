import SignUpForm from './SingUpForm.jsx';

const formInputs = [
    { type: 'text', placeholder: 'Your Name' },
    { type: 'text', placeholder: 'Username' },
    { type: 'email', placeholder: 'Email Address' },
    { type: 'password', placeholder: 'Password' },
]

const SignUpPopup = ({ title }) => {

    return (
        <section
            data-title={title}
            className="w-full"
        >

            <div className='w-full bg-[#F3F5F7]'>
                <img
                    src="src/assets/images/Earphones.png"
                    alt=""
                    className=""
                />
            </div>

            <div
                className="
                w-[311px] mx-auto py-10
                flex flex-col gap-8"
            >
                <div
                    className="flex flex-col gap-6"
                >
                    <header
                        className="h4"
                    >
                        {title}
                    </header>
                    <p
                        className="body-2"
                    >
                        Already have an account?
                        <span className="body-2-semi text-[var(--green)]">Sign in</span>
                    </p>
                </div>

                <SignUpForm formInputs={formInputs} />
                
                <button
                    className="
                    w-full h-12 
                    bg-(--neutral-7-100) rounded-lg
                    btn-s
                    text-white"
                >
                    Sign Up
                </button>
            </div>
        </section>
    );
}

export default SignUpPopup;
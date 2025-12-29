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
            className="
            w-full h-[100vh]
            2xl:flex 2xl:gap-22"
        >

            <div
                className='
                relative 
                w-full 2xl:w-[50%]
                flex items-center justify-center
                bg-[#F3F5F7]'
            >
                <header
                    className='
                    absolute top-8 right-1/2 translate-x-1/2
                    text-black text-6 leading-6 tracking-[0] font-poppins font-medium'>
                    3legant<span className="text-(--neutral-4-100)">.</span>
                </header>
                <img
                    src="src/assets/images/Paste image.png"
                    alt=""
                    className='h-[430px] 2xl:h-auto'
                />
            </div>

            <div
                className="
                w-[311px] 2xl:w-[456px] mx-auto 2xl:mt-55 py-10 2xl:py-0
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

            </div>
        </section>
    );
}

export default SignUpPopup;
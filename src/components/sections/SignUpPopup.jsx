import { Eye, Check } from '@assets/icons/index.js';

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

                <form
                    action=""
                    className="
                    w-full
                    flex flex-col gap-8
                    "
                >
                    {formInputs.map((input, index) => (
                        <div
                            className="
                            relative 
                            h-10 
                            body-2 border-b border-(--neutral-3-100)"
                        >
                            <input
                                key={index}
                                type={input.type}
                                placeholder={input.placeholder}
                                className="w-full outline-0"
                            />
                            {input.type === 'password' && (
                                <Eye className="absolute top-0 right-0 cursor-pointer" />
                            )}
                        </div>
                    ))}

                    <div
                        className='flex items-center gap-3'
                    >
                        <button
                            className="
                            size-6 rounded-sm
                            flex items-center justify-center
                            border-[1.5px] border-(--neutral-4-100) box-border"
                        >

                        </button>
                        <p
                            className=' 
                            flex items-center 
                            whitespace-break-spaces'
                        >
                            <span className='caption-2'>I agree with </span>
                            <span className="caption-2-semi">Privacy Policy</span>
                            <span className="caption-2"> and </span>
                            <span className="caption-2-semi">Terms of Use</span>
                        </p>
                    </div>
                </form>

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
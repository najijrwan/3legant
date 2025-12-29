
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

            <div>
                <img
                    src="src/assets/images/Paste image.png"
                    alt=""
                    className="w-full"
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
                        <div className="h-10 body-2 border-b border-(--neutral-3-100)">
                            <input
                                key={index}
                                type={input.type}
                                placeholder={input.placeholder}
                                className=""
                            />
                        </div>
                    ))}

                    <div>
                        <p>I agree with Privacy Policy and Terms of Use</p>
                    </div>
                </form>

                <button
                    className="
                    "
                >
                    Sign Up
                </button>
            </div>
        </section>
    );
}

export default SignUpPopup;
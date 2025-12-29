
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
                mx-auto py-10
                flex flex-col gap-8"
            >
                <div
                    className="
                    flex flex-col gap-6"
                >
                    <header
                        className="
                        h4 text-black"
                    >
                        {title}
                    </header>
                    <p
                        className="
                        body-2 text-[#6C7275]"
                    >
                        Already have an account? 
                        <span className="body-2-semi text-[var(--green)]">Sign in</span>
                    </p>
                </div>

                <form
                    action=""
                    className="
                    "
                >
                    <input type="text" />
                    <input type="text" />
                    <input type="email" />
                    <input type="password" />

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
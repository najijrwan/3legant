import { useState } from 'react';
import { Eye, Check } from '@icons/index.js';
import Button from './FormBtn.jsx';

const fields = [
    { name: 'email', type: 'email', placeholder: 'Your username or email address' },
    { name: 'password', type: 'password', placeholder: 'Password' },
];

const SignInForm = ({ }) => {

    const [agreed, setAgreed] = useState(false);

    return (
        <form
            action=""
            className="
        w-full
        flex flex-col gap-8"
        >
            {fields.map((input, index) => (
                <div
                    key={index}
                    className="
                            relative 
                            h-10 
                            body-2 text-(--neutral-4-100) border-b border-(--neutral-3-100)"
                >
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        autoComplete='on'
                        className="w-full outline-0"
                    />
                    {input.type === 'password' && (
                        <Eye
                            className="
                            absolute top-0 right-0 
                            cursor-pointer"
                        />
                    )}
                </div>
            ))}

            <label
                className="
                w-full
                flex items-center gap-3 
                cursor-pointer 
                select-none"
            >
                {/* Real checkbox (accessible, functional) */}
                <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(prev => !prev)}
                    className="sr-only"
                />

                {/* Custom visual checkbox */}
                <span
                    className={`
                            size-6 rounded-sm
                            flex items-center justify-center
                            border-[1.5px] border-(--neutral-4-100)
                            transition
                            ${agreed
                            ? ''
                            : ''
                        }
    `}
                >
                    {agreed && <Check />}
                </span>

                {/* Text */}
                <p
                    className="
                w-full
                flex items-center justify-between flex-wrap"
                >
                    <span className="body-2 text-(--neutral-4-100)">Remember me</span>
                    <span className="caption-2-semi text-(--neutral-7-100)">Forget Password?</span>
                </p>
            </label>

            <Button variant='default'>
                Sign In
            </Button>
        </form>
    );
}

export default SignInForm;
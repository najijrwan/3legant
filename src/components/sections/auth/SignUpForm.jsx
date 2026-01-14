import { useState } from 'react';
import { Eye, Check } from '@icons';
import Button from './FormBtn.jsx';

const fields = [
    { name: 'name', type: 'text', placeholder: 'Your Name' },
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'email', type: 'email', placeholder: 'Email Address' },
    { name: 'password', type: 'password', placeholder: 'Password' },
];

const SignUpForm = ({ formInputs }) => {

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
                            body-2 text-n4100 border-b border-n3100"
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
                            border-[1.5px] border-n4100
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
                <p className="flex items-center flex-wrap gap-x-1">
                    <span className="caption-2 text-n4100">I agree with</span>
                    <span className="caption-2-semi text-n7100">Privacy Policy</span>
                    <span className="caption-2 text-n4100">and</span>
                    <span className="caption-2-semi text-n7100">Terms of Use</span>
                </p>
            </label>

            <Button variant="default">
                Sign Up
            </Button>
        </form>
    );
}

export default SignUpForm;
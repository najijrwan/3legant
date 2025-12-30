const FormBtn = ({ variant, children }) => {
    const variants = {
        default: 'bg-(--neutral-7-100) text-white',
        outline: 'border border-(--neutral-7-100) text-(--neutral-7-100) bg-transparent',
    }
    return (
        <button
            type="submit"
            className={`
                py-[10px] px-[40px] 
                rounded-lg 
                btn-s
                ${variants[variant]}`}
        >
            {children}
        </button>
    );
};

export default FormBtn;

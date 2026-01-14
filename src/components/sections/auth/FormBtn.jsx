const FormBtn = ({ variant, children }) => {
    const variants = {
        default: 'bg-n7100 text-white',
        outline: 'border border-n7100 text-n7100 bg-transparent',
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

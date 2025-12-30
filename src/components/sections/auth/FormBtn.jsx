const FormBtn = ({ variant,children }) => {
    const variants = {
        default: 'py-[10px] px-[40px] bg-(--neutral-7-100) rounded-lg btn-s text-white',
        outline: ''
    }
    return (
        <button
            type="submit"
            className={variants[variant]}
        >
            {children}
        </button>
    );
};

export default FormBtn;

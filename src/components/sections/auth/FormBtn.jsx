const FormBtn = ({ children }) => {
    return (
        <button
            type="submit"
            className="
            w-full h-12 
            bg-(--neutral-7-100) rounded-lg
            btn-s
            text-white"
        >
            {children}
        </button>
    );
};

export default FormBtn;

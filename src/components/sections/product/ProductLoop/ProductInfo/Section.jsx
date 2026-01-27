const Section = ({ className = '', children, divider = false }) => (

    <div
        className={`
        flex flex-col
        ${className}`}
    >
        {children}

        {divider && (
            <div className="h-px bg-n3100 mt-6" />
        )}
    </div>
);

export default Section;
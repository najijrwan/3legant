const Section = ({ children, divider = false, padding = 'default' }) => (
    <div 
        className={`
        flex flex-col
    ${padding === 'default' ? 'py-6 2xl:py-4' : ''}
  `}>
        {children}

        {divider && (
            <div className="h-px bg-n3100 mt-6 2xl:mt-4" />
        )}
    </div>
);

export default Section;
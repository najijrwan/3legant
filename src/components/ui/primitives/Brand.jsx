const Brand = ({ className = '' }) => {
    return (
        <header
            className={`
                    text-brand text-base 2xl:text-2xl leading-6 2xl:leading-6 tracking-[0] 
                    font-poppins font-medium whitespace-break-spaces
                    ${className}`}
        >
            3legant<span className="text-n4100">. </span>
        </header>
    )
}

export default Brand;
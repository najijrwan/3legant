const ProductsCarouselHeader = ({ title, variant, children }) => {
    const VARIANTS = {
        default: 'h5 2xl:h4',
        alt: 'h6',
    }
    return (
        <header
            data-id='title&action'
            className="
            w-full 2xl:w-[1120px]
            flex justify-between items-end"
        >
            <p className={`text-brand whitespace-pre-line ${VARIANTS[variant]}`}>
                {title}
            </p>

            {children}
        </header>
    )
}

export default ProductsCarouselHeader;
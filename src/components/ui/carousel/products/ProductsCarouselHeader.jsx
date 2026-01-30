import { MoreActionBtn } from '@ui';

const ProductsCarouselHeader = ({ title, titleVariant, action }) => {

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
            <p className={`text-brand whitespace-pre-line ${VARIANTS[titleVariant]}`}>
                {title}
            </p>

            {action}

            {/* {navMode === 'dots' && (
                <DotNav />
            )} */}
        </header>
    );
};

export default ProductsCarouselHeader;

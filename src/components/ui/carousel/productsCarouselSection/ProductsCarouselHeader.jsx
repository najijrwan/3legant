import { MoreActionBtn } from '@ui';

const ProductsCarouselHeader = ({ title, titleVariant, navMode, isMobile }) => {

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

            {(navMode === 'scrollbar' && !isMobile) && (
                <MoreActionBtn
                    label='More Products'
                    labelClass='btn-xs 2xl:btn-s text-n7100'
                />
            )}

            {/* {navMode === 'dots' && (
                <DotNav />
            )} */}
        </header>
    );
};

export default ProductsCarouselHeader;

import { ProductMedia, ProductInfo, } from '@product';

const ProductLoop = ({ layout }) => {
    const mediaLayout = {
        useDesktopMedia: layout.useDesktopMedia,
        isMobile: layout.isMobile,
    };

    return (
        <section
            className="
                px-8 2xl:px-40
                flex flex-col 2xl:flex-row 2xl:justify-between"
        >

            <ProductMedia mediaLayout={mediaLayout} />

            <ProductInfo layout={layout} />
        </section>
    );
}

export default ProductLoop;
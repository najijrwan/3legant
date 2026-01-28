import { ProductMedia, ProductInfo, } from '@product';

const ProductLoop = ({ layout }) => {

    return (
        <section
            className="
                px-8 2xl:px-40
                flex flex-col 2xl:flex-row 2xl:justify-between"
        >

            <ProductMedia layout={layout} />

            <ProductInfo layout={layout} />
        </section>
    );
}

export default ProductLoop;
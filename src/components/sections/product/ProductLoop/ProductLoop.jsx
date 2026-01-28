import { ProductMedia, ProductInfo, } from '@product';

const ProductLoop = () => {
    return (
        <section
            className="
                px-8 2xl:px-40
                flex flex-col 2xl:flex-row 2xl:justify-between"
        >

            <ProductMedia />

            <ProductInfo />
        </section>
    );
}

export default ProductLoop;
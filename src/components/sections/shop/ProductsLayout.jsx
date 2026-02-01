import { useBreakpoint } from '@hooks';
import { Toolbar, ProductsGrid } from '@shop';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();
    return (
        <section 
            className="
            pb-20
            flex flex-col gap-8"
        >
            <Toolbar />

            <ProductsGrid />
        </section>
    )
}

export default ProductsLayout;
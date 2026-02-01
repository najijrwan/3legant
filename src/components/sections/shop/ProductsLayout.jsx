import { useBreakpoint } from '@hooks';
import { Toolbar } from '@shop';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();
    return (
        <section 
            className="
            pb-20
            flex flex-col gap-8"
        >
            <Toolbar />
        </section>
    )
}

export default ProductsLayout;
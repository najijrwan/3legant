import { useState } from 'react';
import { useBreakpoint } from '@hooks';
import { Toolbar, ProductsGrid } from '@shop';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();
    const [activeSelector, setActiveSelector] = useState('Grid3x3');


    return (
        <section
            className="
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            flex flex-col 2xl:flex-row gap-8 2xl:gap-6"
        >
            <Toolbar
                activeSelector={activeSelector}
                onClick={(selector) => setActiveSelector(selector)}
            />

            <ProductsGrid activeSelector={activeSelector} />
        </section>
    )
}

export default ProductsLayout;
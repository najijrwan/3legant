import { useState } from 'react';
import { useBreakpoint } from '@hooks';
import { Toolbar, ProductsGrid } from '@shop';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();
    const [activeSelector, setActiveSelector] = useState(isMobile ? 'Grid4x2' : 'Grid3x3');

    const activeSelector3x3 = activeSelector === 'Grid3x3';
    return (
        <section
            className={`
            @container
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            flex flex-col gap-8 2xl:gap-10
            ${activeSelector3x3 ? 'flex-row gap-6' : ''}`}
        >
            <div
                className='
                p-8 2xl:p-0
                flex flex-col @sm:flex-row gap-8 @sm:justify-between'
            >
                <Toolbar
                    activeSelector={activeSelector}
                    onClick={(selector) => setActiveSelector(selector)}
                />
            </div>

            <ProductsGrid activeSelector={activeSelector} />
        </section>
    )
}

export default ProductsLayout;
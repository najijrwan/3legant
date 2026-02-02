import { useState } from 'react';
import { useBreakpoint } from '@hooks';
import { Toolbar, Filters, ProductsGrid } from '@shop';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();
    const [activeSelector, setActiveSelector] = useState(isMobile ? 'Grid4x2' : 'Grid3x3');

    const activeSelector3x3 = activeSelector === 'Grid3x3';
    return (
        <section
            className={`
            @container
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            ${activeSelector3x3 ? 'flex flex-row gap-6' : ''}`}
        >
            {activeSelector3x3 && (
                <div
                    className='flex flex-col gap-8'
                >
                    <Filters />
                </div>
            )}
            
            <div className='flex flex-col gap-8 2xl:gap-10'>
                <div
                    className='
                    p-8 2xl:p-0
                    flex flex-col @sm:flex-row 2xl:items-start @sm:justify-between gap-8'
                >
                    <Toolbar
                        activeSelector={activeSelector}
                        onClick={(selector) => setActiveSelector(selector)}
                    />
                </div>

                <ProductsGrid activeSelector={activeSelector} />
            </div>
        </section>
    )
}

export default ProductsLayout;
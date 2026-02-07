import { useState } from 'react';
import { useBreakpoint } from '@hooks';
import { ProductCard, ProductCardHorizontal, ViewMore } from '@ui';
import { PRODUCTS_GRID } from '@data';

const ProductsGrid = ({ activeSelector = 'Grid3x3' }) => {
    const { isMobile } = useBreakpoint();

    const getGridClasses = () => {
        switch (activeSelector) {
            case 'Grid3x3':
                return `grid-rows-3 grid-cols-3`;
            case 'Grid4x4':
                return `grid-rows-4 grid-cols-4`;
            case 'Grid4x2':
                return `grid-rows-4 grid-cols-2`;
            case 'Grid4x1':
                return `grid-rows-4 grid-cols-1`;
            default:
                return `grid-rows-3 grid-cols-3`;
        }
    };

    const VARIANT = activeSelector === 'Grid4x2' ? 'sm' : 'md';

    return (
        <div
            className='flex flex-col items-center gap-8'
        >
            <div
                className={`grid gap-6 ${getGridClasses()}`}
            >
                {PRODUCTS_GRID.map((product, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-3 group cursor-pointer'
                    >
                        {(activeSelector === 'Grid3x3' || activeSelector === 'Grid4x4' || (activeSelector === 'Grid4x2' && isMobile)) && (
                            <ProductCard
                                product={product}
                                variant={VARIANT}
                            />
                        )}

                        {((activeSelector === 'Grid4x2' && !isMobile) || activeSelector === 'Grid4x1') && (
                            <div className='px-8 2xl:px-0 flex flex-col 2xl:flex-row gap-4 2xl:gap-0'>
                                <ProductCardHorizontal product={product} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <ViewMore
                label="Show More"
            />
        </div>
    )
}

export default ProductsGrid;
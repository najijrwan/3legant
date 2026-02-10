import { useState } from 'react';
import { useBreakpoint } from '@hooks';
import { GRID_MODE } from '@shop/state';
import { ProductCard, ProductCardHorizontal, ViewMore } from '@ui';
import { PRODUCTS_GRID } from '@data';

export const ProductsGrid = ({ activeSelector = GRID_MODE.GRID_3X3 }) => {

    const {
        gridClasses,
        renderVerticalCard,
        renderHorizontalCard,
        cardVariant,
    } = useShopLayout({ activeSelector, isMobile })
    
    const { isMobile } = useBreakpoint();

    const getGridClasses = () => {
        switch (activeSelector) {
            case GRID_MODE.GRID_3X3:
                return `grid-rows-3 grid-cols-3`;
            case GRID_MODE.GRID_4x4:
                return `grid-rows-4 grid-cols-4`;
            case GRID_MODE.GRID_4x2:
                return `grid-rows-4 grid-cols-2`;
            case GRID_MODE.GRID_4x1:
                return `grid-rows-4 grid-cols-1`;
            default:
                return `grid-rows-3 grid-cols-3`;
        }
    };

    const VARIANT = activeSelector === GRID_MODE.GRID_4X2 ? 'sm' : 'md' ? 'sm' : 'md';

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
                        {(
                            activeSelector === GRID_MODE.GRID_3x3 ||
                            activeSelector === GRID_MODE.GRID_4x4 ||
                            (activeSelector === GRID_MODE.GRID_4x2 && isMobile))
                            && (
                                <ProductCard
                                    product={product}
                                    variant={VARIANT}
                                />
                            )}

                        {(
                            (activeSelector === GRID_MODE.GRID_4x2 && !isMobile) ||
                            activeSelector === GRID_MODE.GRID_4x2)
                            && (
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
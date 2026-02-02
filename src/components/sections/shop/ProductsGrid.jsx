import { ProductCard, ViewMore } from '@ui';
import { PRODUCTS_GRID } from '@data';

const ProductsGrid = ({ activeSelector = 'Grid3x3' }) => {
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
                        className='flex flex-col gap-3'
                    >
                        <ProductCard
                            product={product}
                            variant={VARIANT}
                        />
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
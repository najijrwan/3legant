import { ProductCard, ViewMore } from '@ui';
import { PRODUCTS_GRID } from '@data';

const ProductsGrid = () => {
    return (
        <div
            className='flex flex-col items-center gap-8'
        >
            <div
                className='max-w-[311px] grid-rows-4 grid-cols-2 gap-x-2 gap-y-4'
            >
                {PRODUCTS_GRID.map((product, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-3'
                    >
                        <ProductCard
                            product={product}
                            className=''
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
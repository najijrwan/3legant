import { Filters } from '@shop';
import { useBreakpoint } from '@hooks';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();
    return (
        <section className="
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            flex flex-col 2xl:flex-row gap-8 2xl:gap-6"
        >
            <div
                className='
                p-8 flex flex-col gap-8'
            >
                <Filters />
            </div>
        </section>
    )
}

export default ProductsLayout;
import { ProductsFilter, ViewportSelectors, SortFilter } from '@shop';
import { useBreakpoint } from '@hooks';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();
    return (
        <section className="
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            flex flex-col gap-8 2xl:gap-6"
        >
            <div className='
                w-full p-8 2xl:p-0
                flex flex-col 2xl:flex-row-reverse items-centergap-4'
            >
                <div className='w-full max-w-[296px] py-2 2xl:p-0 flex items-center justify-between'>
                    {isMobile && <ProductsFilter />}
                    {!isMobile && <SortFilter />}
                    <ViewportSelectors />
                </div>

                <div className='w-full flex items-center justify-between'>
                    <p className='text-brand body-2-semi'>Living Room</p>
                    <div className='2xl:hidden'>
                        <SortFilter />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsLayout;
import { useBreakpoint } from '@hooks';
import { ProductsFilter } from '@shop';
import { Icon } from '@ui';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();

    return (
        <section className="
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            flex flex-col gap-8 2xl:gap-6"
        >
            <div className='
                w-full p-8
                flex flex-col gap-4'
            >
                <div className='w-full py-2 flex items-center justify-between'>
                    <ProductsFilter />
                    <div className='flex border border-black-200 '>
                        <button className='bg-n2100 border border-n3100 flex justify-center items-center'>
                            <Icon name="Grid3x3" spanClassName="w-[46px] h-[40px]" iconClassName="size-4.5 text-n7100" />
                        </button>
                        <button className='border border-n3100 flex justify-center items-center'>
                            <Icon name="Grid4x4" spanClassName="w-[46px] h-[40px]" iconClassName="size-4.5 text-n4100" />
                        </button>
                    </div>
                </div>

                <div className='w-full flex justify-between'>
                    <p className='text-brand body-2-semi'>Living Room</p>
                    <button className='text-black-900 flex items-center gap-1'>
                        <p className='body-2-semi'>Sort by</p>
                        <Icon name="ChevronDown" spanClassName='size-5' iconClassName="w-[10px] h-[5px]" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductsLayout;
import { useBreakpoint } from '@hooks';
import { Icon } from '@ui';

export const ProductsLayout = () => {
    const { isMobile } = useBreakpoint();

    return (
        <section className="
            pb-20 2xl:pb-25 2xl:px-40 2xl:pt-15
            flex flex-col gap-8 2xl:gap-6"
        >
            {!isMobile && (
                <aside className='flex flex-col gap-8'>
                    <header className='flex items-center gap-2'>
                        <Icon
                            name='Filter'
                            spanClassName='size-6'
                            iconClassName='w-[18px] h-[16px] text-n7100'
                        />
                        <p className='text-black-900 body-2-semi 2xl:body-1-semi'>Filter</p>
                    </header>
                </aside>
            )}
        </section>
    )
}

export default ProductsLayout;
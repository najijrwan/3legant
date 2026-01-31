import { Icon } from '@ui';

const ProductsFilter = () => {
    return (
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
    )
}

export default ProductsFilter;
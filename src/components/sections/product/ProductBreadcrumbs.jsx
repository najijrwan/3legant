import { Icon } from '@ui';

const ProductBreadcrumbs = () => {
    return (
        <ul
            className="
                w-fit my-4 ml-8 2xl:ml-40
                flex gap-2 2xl:gap-4
                text-black600 caption-1 font-medium 2xl:btn-xs"
        >
            <li className='flex items-center gap-1'>
                <span>Home</span>
                <Icon name='ChevronRight' spanClassName='size-3' iconClassName='w-[8px] h-[9px]' />
            </li>
            <li className='flex items-center gap-1'>
                <span>Shop</span>
                <Icon name='ChevronRight' spanClassName='size-3' iconClassName='w-[8px] h-[9px]' />
            </li>
            <li className='flex items-center gap-1'>
                <span>Living Room</span>
                <Icon name='ChevronRight' spanClassName='size-3' iconClassName='w-[8px] h-[9px]' />
            </li>
            <li className='text-black900'>Product</li>
        </ul>
    )
}

export default ProductBreadcrumbs;
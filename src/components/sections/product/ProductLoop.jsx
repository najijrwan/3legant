import { Icon } from '@ui';

const ProductLoop = () => {
    return (
        <section
            className="
            px-8 py-4 2xl:p-0 2xl:pt-4
            flex flex-col gap-4"
        >
            <ul
                className="
                w-fit 2xl:pl-40
                flex gap-2 2xl:gap-4
                text-black600 caption-1 font-medium 2xl:btn-xs"
            >
                <li className='flex items-center gap-1'>
                    <span>Home</span>
                    <Icon name='ChevronRight' spanClassName='size-3' />
                </li>
                <li className='flex items-center gap-1'>
                    <span>Shop</span>
                    <Icon name='ChevronRight' spanClassName='size-3' />
                </li>
                <li className='flex items-center gap-1'>
                    <span>Living Room</span>
                    <Icon name='ChevronRight' spanClassName='size-3' />
                </li>
                <li className='text-black900'>Product</li>
            </ul>


        </section>
    );
}

export default ProductLoop;
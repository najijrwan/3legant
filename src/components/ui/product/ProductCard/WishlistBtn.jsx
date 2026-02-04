import { Icon } from '@ui';

const WishlistBtn = ({ variant }) => {
    return (
        <button
            className={`
            absolute top-4 ${variant === 'sm' ? 'right-3' : 'right-4'} 2xl:-translate-y-1/2
            size-8 rounded-full
            flex items-center justify-center
            bg-white opacity-100 2xl:opacity-0
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 ease-out`}
        >
            <Icon
                name='Heart'
                spanClassName='size-5'
                iconClassName='w-[19px] h-[15px] text-n4100'
            />
        </button>
    )
}

export default WishlistBtn;
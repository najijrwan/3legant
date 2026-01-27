import { Icon } from '@ui';

const CartWishlistBtn = ({ onClick, iconName = '', count = 0 }) => {
    return (
        <div
            className="
            w-12.5 h-7
            flex items-center gap-2.5"
        >
            <button
                onClick={onClick}
                className="
                size-6 flex items-center justify-center"
            >
                <Icon name={iconName} />
            </button>
            <span
                className="
                size-5 rounded-full
                flex items-center justify-center
                text-white text-xs leading-2.5 tracking-normal font-inter font-bold
                bg-n7100"
            >
                {count}
            </span>
        </div>
    );
}

export default CartWishlistBtn;
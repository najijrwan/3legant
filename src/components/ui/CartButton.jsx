import { Icon } from '@ui';

export const WishlistButton = ({ count = 0 }) => {
    return (
        <span
            className="
                size-5 rounded-full
                flex items-center justify-center
                text-white text-xs leading-2.5 tracking-normal font-inter font-bold
                bg-(--neutral-7-100)"
        >
            {count}
        </span>
    );
}

const CartButton = ({ count }) => {
    return (
        <div
            className="
            w-12.5 h-7
            flex items-center gap-2.5"
        >
            <button
                className="
                size-6 flex items-center justify-center"
            >
                <Icon name="ShoppingBag" />
            </button>
            <WishlistButton count={count} />
        </div>
    );
}

export default CartButton;
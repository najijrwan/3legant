import { Icon } from '@ui';

const CartButton = ({ iconName = '', count = 0 }) => {
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
                <Icon name={iconName} />
            </button>
            <span
                className="
                size-5 rounded-full
                flex items-center justify-center
                text-white text-xs leading-2.5 tracking-normal font-inter font-bold
                bg-(--neutral-7-100)"
            >
                {count}
            </span>
        </div>
    );
}

export default CartButton;
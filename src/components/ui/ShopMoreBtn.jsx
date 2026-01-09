import { Icon } from '@ui';

const ShopMoreBtn = ({
    label = '',
    btnClassName = '',
    labelClassName = '',
    spanClassName = '',
}) => {
    return (
        <button
            className={`
            w-fit
            flex items-center gap-1
            btn-xs 2xl:btn-s
            shadow-line
            ${btnClassName}
            `}
        >
            <span className={`${labelClassName}`}>{label}</span>
            <Icon
                name="ArrowRight"
                spanClassName={`${spanClassName}`}
                iconClassName='w-3 h-2.5'
            />
        </button>
    );
}

export default ShopMoreBtn;
import { Icon } from '@ui';

const ShopMoreBtn = ({
    label = '',
    btnClassName = '',
    labelClassName = '',
    spanClassName = '',
    iconClassName = '',
}) => {
    return (
        <button
            className={`
            w-fit
            flex items-center gap-1
            btn-xs 2xl:btn-s
            ${btnClassName}`}
        >
            <span className={`${labelClassName}`}>{label}</span>
            <Icon
                name="ArrowRight"
                spanClassName={`${spanClassName}`}
                iconClassName={`${iconClassName}`}
            />
        </button>
    );
}

export default ShopMoreBtn;
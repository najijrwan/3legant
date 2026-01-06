import { Icon } from '@ui';

const ShopMoreBtn = ({ className, label, variant }) => {
    const variants = {
        sm: {
            size: '16px',
            icon: 'w-[9.33px] h-[8px]'
        },
        md: {
            size: '18px',
            class: 'w-[10.5px] h-[9px]'
        },
        lg: {
            size: '20px',
            class: 'w-[11.67px] h-[10px'
        }
    }
    return (
        <button
            className={`
            flex items-center gap-1
            btn-xs 2xl:btns
            ${className}`}
        >
            <span>{label}</span>
            <Icon name="ArrowRight" size={variants[variant].size} className={variants[variant].class} />
        </button>
    );
}

export default ShopMoreBtn;
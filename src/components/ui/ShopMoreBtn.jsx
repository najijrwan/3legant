import { Icon } from '@ui';

const ShopMoreBtn = ({ label, variant, className }) => {
    const variants = {
        sm: {
            size: 16,
            icon: 'w-[9.33px] h-[8px]'
        },
        md: {
            size: 18,
            icon: 'w-[10.5px] h-[9px]'
        },
        lg: {
            size: 20,
            icon: 'w-[11.67px] h-[10px]'
        }
    }
    return (
        <button
            className={`
            w-fit
            flex items-center gap-1
            btn-xs 2xl:btn-s
            ${className}`}
        >
            <span>{label}</span>
            <Icon name="ArrowRight" size={variants[variant].size} className={variants[variant].icon} />
        </button>
    );
}

export default ShopMoreBtn;
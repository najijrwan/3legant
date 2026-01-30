import { Icon } from '@ui';

const CarouselNavButton = ({ direction, variant = 'md', disabled, onClick, className }) => {
    const VARIANTS = {
        md: {
            btnSize: 'size-10',
            iconSpanSize: 'size-6',
            iconSize: 'w-[14px] h-[12px]',
        },
        lg: {
            btnSize: 'size-13',
            iconSpanSize: 'size-8',
            iconSize: 'w-[19px] h-[16px]',
        }
    }

    const { btnSize, iconSpanSize, iconSize } = VARIANTS[variant];
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
                absolute top-1/2 -translate-y-1/2
                flex items-center justify-center
                bg-white rounded-full
                ${className}
                ${btnSize}
                ${disabled ? 'cursor-not-allowed' : ''}`}
        >
            <Icon
                name={direction === 'left' ? 'ArrowLeft' : 'ArrowRight'}
                spanClassName={iconSpanSize}
                iconClassName={`
                    ${iconSize}
                    ${disabled ? 'text-n4100' : 'text-n7100'}`}
            />
        </button>
    )
}

export default CarouselNavButton;
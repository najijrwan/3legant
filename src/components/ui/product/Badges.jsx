const Badges = ({ variant = 'medium', discountPercentage = 0, containerClass = '' }) => {
    const VARIANTS = {
        medium: {
            badge: 'px-3.5 py-1 hairline-1',
            textColor: 'text-n7100',
        },
        large: {
            badge: 'px-4.5 py-2',
            textStyle: { new: 'text-black-900 body-2-semi 2xl:badges', percent: 'badges' },
        },
    }
    return (
        <div
            className={`
            absolute flex flex-col gap-2 2xl:gap-2.25
            ${containerClass}`}
        >
            <div
                className={`
                    ${VARIANTS[variant].badge}
                    ${variant === 'medium'
                        ? VARIANTS[variant].textColor
                        : VARIANTS[variant].textStyle.new}
                        rounded-sm bg-white`}
            >
                NEW
            </div>

            <div
                className={`
                    ${VARIANTS[variant].badge}
                    ${variant === 'large'
                        ? VARIANTS[variant].textStyle.percent
                        : ''} 
                        rounded-sm text-n1100 bg-green`}
            >
                -{discountPercentage}%
            </div>
        </div>
    );
}

export default Badges;
const Badges = ({ variant = 'medium', discountPercentage = 0, containerClass = '' }) => {
    const VARIANTS = {
        medium: 'px-3.5 py-1 text-n7100 hairline-1',
        large: {
            new: `
            w-[74px] h-[32px] 2xl:size-fit px-4.5 py-2
            flex items-center justify-center 
            text-black-900 body-2-semi 2xl:badges 
            bg-white rounded-sm`,
            percent: `
            w-[78px] h-[32px] 2xl:size-fit px-4.5 py-2
            flex items-center justify-center 
            text-n1100 badges
            bg-green rounded-sm`
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
                ${variant === 'medium' ? VARIANTS[variant] : VARIANTS[variant].new}`}
            >
                <span>NEW</span>
            </div>

            <div
                className={`
                ${variant === 'medium' ? VARIANTS[variant] : VARIANTS[variant].percent}`}
            >
                <span>-50%</span>
            </div>
        </div>
    );
}

export default Badges;
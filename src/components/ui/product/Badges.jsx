const Badges = ({ variant, discountPercentage = 0 }) => {
    const VARIANTS = {
        medium: {
            container: 'right-4 top-4',
            badge: 'px-3.5 py-1 hairline-1',
            textColor: 'text-n7100',
        },
        large: {
            container: 'right-6 top-6 2xl:right-8 top-8',
            badge: 'px-4.5 py-2',
            textStyle: {new: 'text-black-900 body-semi-2 2xl:badges', percent: 'badges'},
        },
    }
    return (
        <div
            className={`absolute flex flex-col gap-2 2xl:gap-2.25`}
        >
            <div
                className={`${VARIANTS[variant]} rounded-sm bg-white`}
            >
                New
            </div>

            <div
                className={`${VARIANTS[variant]} rounded-sm text-n1100 bg-green`}
            >
                {discountPercentage}
            </div>
        </div>
    );
}

export default Badges;
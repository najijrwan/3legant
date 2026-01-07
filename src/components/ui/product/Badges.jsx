const Badges = ({ variant, discountPercentage }) => {
    const VARIANTS = {
        medium: 'text-n7100 hairline-1',
        
        medium: {
            color: 'text-n7100',
            text: 'hairline-1',
        },
        medium2: {
            color: 'text-black-900',
            text: 'body-2-semi',
        }
        large: {
            color: 'text-black-900',
            text: 'badges',
        },
    }
    return (
        <div
            className="

            flex flex-col"
        >
            <div
                className="
                px-3.5 py-1 rounded-sm
                text-n7100 hairline-1
                bg-white"
            >
                New
            </div>

            <div
                className="
                bg-green"
            >
                {discountPercentage}
            </div>
        </div>
    )
}
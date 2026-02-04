import { ProductRating } from '@ui';

const ProductCardHorizontal = ({ product }) => {
    return (
        <>
            <div className="relative bg-n2100 h-[416px] 2xl:h-[349px]">
                <img
                    src={product.image}
                    alt=""
                    className="size-full object-contain"
                />

                <Badges
                    variant='medium'
                    discountPercentage={product.discountPercentage}
                    containerClass='left-4 top-4'
                />
            </div>

            <div className="p-0 2xl:p-6 flex flex-col gap-6">

            </div>
        </>
    )
}
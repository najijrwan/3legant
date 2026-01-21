import { Icon, Badges, AddToCartBtn } from '@ui';
import {
ProductBreadcrumbs, 
ProductSummary, 
OfferCountdown,
ProductOptions,
ProductActions,
ProductMeta,
} from '@product';

const PRODUCT_OTHER_IMAGES = [
    "src/assets/images/product image 1.1.png",
    "src/assets/images/product image 1.2.png",
    "src/assets/images/product image 1.3.png",
]

const ProductLoop = () => {
    return (
        <section className="">
            <ProductBreadcrumbs />

            <div
                className='
                px-8 2xl:px-40
                flex flex-col 2xl:flex-row 2xl:justify-between'
            >
                <div className=''>
                    <div className='grid grid-cols-3 grid-rows-3'>
                        <div
                            className='
                            relative row-span-2 col-span-3
                            max-w-[547px] h-[414px] 2xl:h-[728px] mb-4 2lx:mb-[67px]
                            flex items-center
                            bg-n2100'
                        >
                            <img
                                src="src/assets/images/product image 1 black.png"
                                alt=""
                                className='size-[350px] 2xl:size-[650px] object-cover object-bottom'
                            />

                            <Badges variant='large' />
                        </div>

                        {PRODUCT_OTHER_IMAGES.map((images, i) => (
                            <div
                                key={i}
                                className='size-[167px]'
                            >
                                <img
                                    src={images}
                                    alt=""
                                    className="size-full" />
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className='
                    pt-4 2xl:pt-0
                    w-full max-w-[508px]
                    flex flex-col'
                >
                    <ProductSummary />

                    <OfferCountdown />

                    <ProductOptions />

                    <ProductActions />
                    
                    <ProductMeta />
                </div>
            </div>
        </section>
    );
}

export default ProductLoop;
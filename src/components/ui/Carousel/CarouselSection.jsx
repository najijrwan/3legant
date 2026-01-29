import { ProductCarousel, ProductCarouselHeading } from '@ui';
import { MoreActionBtn } from '@ui';

const CarouselSection = ({ title, variant, carouselActionVariant, items }) => {
    const VARIANTS = {
        default: 'pl-8 py-8 2xl:pb-0 2xl:pt-12 2xl:pr-0 2xl:pl-40',
        alt: 'pl-8 pb-20 pt-8 2xl:pl-40 2xl:pt-10',
    }

    return (
        <section
            data-title={title}
            className={`
            relative
            w-full ${VARIANTS[variant]}
            flex flex-col gap-10 2xl:gap-12`}
        >
            <ProductCarouselHeading
                title={title}
                variant={variant}
            >
                {carouselActionVariant === 'default' && (
                    <MoreActionBtn
                        label='More Products'
                        labelClass='btn-xs 2xl:btn-s text-n7100'
                        buttonClass='absolute bottom-0 left-8 2xl:static'
                    />
                )}

                {carouselActionVariant === 'alt' && (
                    <MoreActionBtn
                        label='test'
                        labelClass='btn-xs 2xl:btn-s text-n7100'
                        buttonClass='absolute bottom-0 left-8 2xl:static'
                    />
                )}
            </ProductCarouselHeading>

            <ProductCarousel
                data-id='products'
                items={items}
                cardVariant="medium"
            />
        </section>
    )
}

export default CarouselSection;
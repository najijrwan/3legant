import { ProductCarousel } from '@ui';

const CarouselSection = ({ title, children, items }) => {
    return (
        <div
            data-title={title}
            className="
            relative
            flex flex-col gap-10 2xl:gap-12"
        >
            {children}

            <ProductCarousel
                data-id='products'
                items={items}
                cardVariant="medium"
            />
        </div>
    )
}

export default CarouselSection;
import { MoreActionBtn, ProductCarousel } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';

const NewArrivals = ({ title }) => {
    return (
        <section
            data-title={title}
            className="
            relative
            flex flex-col gap-10 2xl:gap-12"
        >
            <header
                data-id='title-action'
                className="
                w-full 2xl:w-[1120px]
                flex justify-between items-end"
            >
                <h5 className="text-brand 2xl:h4 whitespace-pre-line">
                    {title}
                </h5>

                <MoreActionBtn
                    label='More Products'
                    labelClass='btn-xs 2xl:btn-s text-n7100'
                    buttonClass='absolute bottom-0 left-8 2xl:static'
                />
            </header>

            <ProductCarousel
                data-id='products'
                items={HOME_NEW_ARRIVALS}
                cardVariant="medium"
            />

        </section>
    );
}

export default NewArrivals;
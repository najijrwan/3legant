import { CarouselSection, ProductCarouselHeading, MoreActionBtn, } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';

const NewArrivals = ({ title }) => {
    return (
        <section className='px-8 pl-8 2xl:pb-0 2xl:pt-12 2xl:pr-0 2xl:pl-40'>
            <CarouselSection title={title} items={HOME_NEW_ARRIVALS}>
                <ProductCarouselHeading
                    title={title}
                    variant="default"
                >
                    <MoreActionBtn
                        label='More Products'
                        labelClass='btn-xs 2xl:btn-s text-n7100'
                        buttonClass='absolute bottom-0 left-8 2xl:static'
                    />
                </ProductCarouselHeading>
            </CarouselSection>
        </section>
    );
}

export default NewArrivals;
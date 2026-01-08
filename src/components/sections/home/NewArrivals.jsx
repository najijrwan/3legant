import { ShopMoreBtn } from '@ui';
import { ProductCarousel } from '@product';
import { NEW_ARRIVALS_ITEMS } from '@products';


const NewArrivals = ({ title }) => {
    return (
        <section
            data-title={title}
            className="
            relative
            w-full p-8 pr-0 2xl:pl-40 2xl:pt-12
            flex flex-col gap-10 2xl:gap-12"
        >
            <header
                data-id='title&action'
                className="
                2xl:w-[1120px]
                flex justify-between items-end"
            >
                <h5 className="w-[125px] text-brand 2xl:h4">{title}</h5>
                <ShopMoreBtn
                    label='More Products'
                    spanClassName='size-4 2xl:size-5'
                    btnClassName='
                    absolute 2xl:static left-8 bottom-0
                    text-n7100'
                />
            </header>

            <ProductCarousel
                items={NEW_ARRIVALS_ITEMS}
                cardVariant="medium"
            />

        </section>
    );
}

export default NewArrivals;
import { ShopMoreBtn } from '@ui';
import { ProductCard } from '@product';

const NEW_ARRIVALS_ITEMS = [
    {
        image: 'src/assets/images/product image 7.png',
        rating: 5,
        label: 'Loveseat Sofa',
        discountPercentage: 50,
        price: 400,
    },
    {
        image: 'src/assets/images/product image 3.png',
        rating: 5,
        label: 'Table Lamp',
        discountPercentage: 35,
        price: 75,
    },
    {
        image: 'src/assets/images/product image 8.png',
        rating: 5,
        label: 'Beige Table Lamp',
        discountPercentage: 35,
        price: 75,
    },
    {
        image: 'src/assets/images/product image 9.png',
        rating: 5,
        label: 'Bamboo Basket',
        discountPercentage: 35,
        price: 75,
    },
    {
        image: 'src/assets/images/product image 6.png',
        rating: 5,
        label: 'Toasted',
        discountPercentage: 50,
        price: 449,
    },
]

const NewArrivals = ({ title }) => {
    return (
        <section
            data-title={title}
            className="
            relative
            w-full p-8 2xl:p-0 2xl:pl-40 2xl:pt-12
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
                    absolute 2xl:static left-0 bottom-0
                    text-n7100'
                />
            </header>

            <ul
                className="
                h-[392px] 2xl:h-[433px] overflow-x-auto
                flex gap-4 2xl:gap-6"
            >
                {NEW_ARRIVALS_ITEMS.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        variant='medium'
                    />
                ))}
            </ul>
        </section>
    );
}

export default NewArrivals;
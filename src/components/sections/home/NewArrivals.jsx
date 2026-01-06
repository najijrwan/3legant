import { ShopMoreBtn } from '@ui';

const NewArrivals = ({ title }) => {
    return (
        <section
            data-title={title}
            className="
            relative
            w-full p-8 2xl:p-0 2xl:pl-40 2xl:pt-12
            flex flex-col gap-12"
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
                    btnClassName='text-n7100'
                    spanClassName='size-4 2xl:size-5'
                />
            </header>
        </section>
    );
}

export default NewArrivals;
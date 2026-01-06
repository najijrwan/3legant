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
                w-[1120px]
                flex justify-between items-end"
            >
                <h5 className="w-[125px] text-brand 2xl:h4">{title}</h5>
                <button
                    className='
                    '>

                </button>
            </header>
        </section>
    );
}

export default NewArrivals;
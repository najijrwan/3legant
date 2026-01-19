import { Icon } from '@ui';

const productTabs = ['Additonal Info', 'Questions', 'Reviews']

const ProductTabs = () => {
    return (
        <section
            className="
            px-8 pb-20 2xl:px-40 py-10
            flex flex-col gap-10 2xl:gap-12"
        >
            <div
                className="w-full flex flex-col 2xl:flex-row 2xl:gap-20"
            >
                {productTabs.map((tabs, i) => (
                    <div
                        key={i}
                        className='
                        pb-2
                        flex flex-col gap-2.5
                        border-b border-b-n4100'
                    >
                        <button
                            className="w-full flex items-center justify-between"
                        >
                            <span className="text-n4100 btn-m">{tabs}</span>
                            <Icon
                                name="ChevronDown"
                                spanClassName='size-6'
                                iconClassName='w-[12px] h-[6px]'
                            />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductTabs;
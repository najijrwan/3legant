import { useState } from 'react';
import { Icon, ProductRating } from '@ui';

const ADDITONAL_INFO = [
    {
        infoTitle: 'Details',
        infoText: `You can use the removable tray for serving. The
        design makes it easy to put the tray back after use
        since you place it directly on the table frame without 
        having to fit it into any holes.
        `
    },
    {
        infoTitle: 'Packaging',
        infoText: `Width: 20 " Height: 1 ½ " Length: 21 ½ "
        Weight: 7 lb 8 oz
        Package(s): 1
        `
    },
]

const productTabs = [
    {
        id: 'additionalInfo',
        label: 'Additional Info',
        content: (
            <div className="py-2 flex flex-col gap-4">
                {ADDITONAL_INFO.map((ele, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <p className="text-n4100 caption-1-semi">
                            {ele.infoTitle}
                        </p>

                        <p className="text-n7100 caption-2 whitespace-pre-line">
                            {ele.infoText}
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: 'questions',
        label: 'Questions',
        content: (
            <div className="py-2 flex flex-col gap-4">
                {ADDITONAL_INFO.map((ele, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <p className="text-n4100 caption-1-semi">
                            {ele.infoTitle}
                        </p>

                        <p className="text-n7100 caption-2 whitespace-pre-line">
                            {ele.infoText}
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "reviews",
        label: 'Reviews',
        content: (
            <>
                <div className='mt-10 flex flex-col gap-8'>
                    <div className='flex flex-col gap-6'>
                        <p className='text-[#23262F] h7'>Customer Reviews</p>

                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <ProductRating rating={4} />
                                <span className='text-n7100 caption-2'>11 Reviews</span>
                            </div>

                            <div className='flex gap-2'>
                                <p className='text-n7100 caption-1'>Be the first to review</p>
                                <p className='text-[#23262F] caption-1-semi'>Tray Table</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='
                        w-full pl-6 pr-4 py-4
                        flex justify-between
                        rounded-2xl border-2 border-n3100'
                    >
                        <form className=''>
                            <input
                                type="text"
                                placeholder='Share your thoughts'
                                className='text-n4100 caption-1 2xl:placeholder:none'
                            />
                        </form>

                        <button
                            className='
                            size-8 
                            flex items-center justify-center
                            bg-n7100 rounded-full'
                        >
                            <span className='hidden 2xl:block text-white btn-s'>Write Review</span>
                            <Icon
                                name='ArrowRightLong'
                                spanClassName='2xl:hidden size-6'
                                iconClassName='w-[14px] h-[9px]'
                            />
                        </button>
                    </div>
                </div>

                <div className='w-full mt-10 flex flex-col gap-10'>
                    <div className='flex flex-col gap-6'>
                        <h6 className='text-black'>11 Reviews</h6>

                        <div
                            className='
                            pl-4 py-2 pr-2
                            flex items-center justify-between
                            border-2 border-n3100 rounded-lg'
                        >
                            <p className='text-n7100 body-2-semi'>Newest</p>

                            <span className='size-8 flex items-center justify-center'>
                                <Icon
                                    name='ChevronDown'
                                    spanClassName='size-6'
                                    iconClassName='size-3 text-n4100'
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </>
        ),
    }
];

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState(null);
    return (
        <section
            className="
            px-8 2xl:px-40 pb-20 2xl:py-10
            flex flex-col gap-10 2xl:gap-12"
        >
            <div
                className="w-full flex flex-col 2xl:flex-row 2xl:gap-20"
            >
                {productTabs.map((tab) => {
                    const isOpen = activeTab === tab.id;

                    return (
                        <>
                            <div
                                key={tab.id}
                                className={`
                                pb-2
                                flex flex-col gap-2.5 
                                border-b border-b-n4100 ${isOpen ? 'border-b-n7100' : ''}`}
                            >
                                <button
                                    onClick={() =>
                                        setActiveTab(isOpen ? null : tab.id)
                                    }
                                    className="w-full flex items-center justify-between"
                                >
                                    <span className={`text-n4100 ${isOpen ? 'text-n7100' : ''} btn-m`}>{tab.label}</span>

                                    <Icon
                                        name="ChevronDown"
                                        spanClassName="size-6"
                                        iconClassName={`
                                        w-[12px] h-[6px]
                                        ${isOpen ? 'rotate-180' : 'rotate-0'}
                                        transition-all duration-150`}
                                    />
                                </button>
                            </div>

                            {isOpen && tab.content}
                        </>
                    );
                })}

            </div>
        </section>
    );
}

export default ProductTabs;
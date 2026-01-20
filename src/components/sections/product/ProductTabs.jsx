import { useState } from 'react';
import { Icon, ProductRating } from '@ui';
import { REVIEWS } from '@data';

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
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-8 2xl:gap-7.5'>
                    <div className='flex flex-col gap-6'>
                        <p className='text-n2 h7 2xl:h6'>Customer Reviews</p>

                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <ProductRating rating={4} />
                                <span className='text-n7100 caption-2'>11 Reviews</span>
                            </div>

                            <div className='flex gap-2'>
                                <p className='text-n7100 caption-1'>Be the first to review</p>
                                <p className='text-n2 caption-1-semi 2xl:body-2-semi'>Tray Table</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='
                        w-full pl-6 pr-4 py-4
                        flex items-center justify-between
                        rounded-2xl border-2 border-n3100'
                    >
                        <form className='h-fit'>
                            <input
                                type="text"
                                placeholder='Share your thoughts'
                                className='
                                text-n4100 caption-1
                                2xl:placeholder-transparent outline-none'
                            />
                        </form>

                        <button
                            className='
                            p-1 2xl:px-10 2xl:py-1.5
                            flex items-center justify-center
                            bg-n7100 rounded-full'
                        >
                            <span className='hidden 2xl:inline text-white btn-s'>Write Review</span>
                            <Icon
                                name='ArrowRightLong'
                                spanClassName='2xl:hidden size-6'
                                iconClassName='w-[14px] h-[9px]'
                            />
                        </button>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-10'>
                    <div className='flex flex-col 2xl:flex-row 2xl:justify-between gap-6'>
                        <h6 className='text-black'>11 Reviews</h6>

                        <div
                            className='
                            w-full max-w-[256px] pl-4 py-2 pr-2
                            flex items-center justify-between
                            border-2 border-n3100 rounded-lg'
                        >
                            <p className='text-n7100 body-2-semi'>Newest</p>

                            <span className='size-8 flex items-center justify-center'>
                                <Icon
                                    name='ChevronDown'
                                    spanClassName='size-6'
                                    iconClassName='w-[9px] h-[5.5px] text-n4100'
                                />
                            </span>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-6'>
                        {REVIEWS.map((review, i) => (
                            <div
                                key={i}
                                className='pb-4 2xl:pb-6 border-b border-b-n3100'
                            >
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-4 2xl:gap-10'>
                                        <img
                                            src={review.avatar}
                                            alt=""
                                            className="size-[72px]"
                                        />

                                        <div className='flex flex-col gap-4'>
                                            <header className='text-n7100 body-1-semi [word-spacing:4px]'>
                                                {review.name}
                                            </header>

                                            <ProductRating rating={review.rating} />
                                        </div>
                                    </div>

                                    <p className='2xl:ml-[112px] text-n3 body-2'>
                                        {review.comment}
                                    </p>

                                    <div className='2xl:ml-[112px] flex gap-4'>
                                        <p className='text-n2 caption-2'>about 1 hours ago</p>

                                        <button className='text-n2 caption-2-semi'>Like</button>

                                        <button className='text-n2 caption-2-semi'>Reply</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            className='
                            w-fit mx-auto px-10 py-1.5 
                            rounded-[80px] border border-b7100 btn-s'
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        ),
    }
];

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState('reviews');

    const activeTabContent = productTabs.find(
        (tab) => tab.id === activeTab
    )?.content;

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
                        <div
                            key={tab.id}
                            className={`
                                pb-2 2xl:pb-0
                                ${isOpen ? 'border-b border-b-n7100' : 'border-b border-b-n4100 2xl:border-0'}`}
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
                                    spanClassName="size-6 2xl:hidden"
                                    iconClassName={`
                                        w-[12px] h-[6px]
                                        ${isOpen ? 'rotate-180' : 'rotate-0'}
                                        transition-all duration-150`}
                                />
                            </button>
                        </div>
                    );
                })}
            </div>

            {activeTabContent && (
                <>
                    {activeTabContent}
                </>
            )}
        </section>
    );
}

export default ProductTabs;
import { useState } from 'react';
import { Icon } from '@ui';

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
                <div className='flex flex-col gap-8'>
                    <div className='flex flec-col gap-6'>
                        <p className='text-[#23262F] h7'>Customer Reviews</p>

                        <div className='flex flex-col gap-2'></div>
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
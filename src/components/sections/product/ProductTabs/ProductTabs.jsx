import { useState } from 'react';
import { Icon } from '@ui';
import { PRODUCT_TABS } from './ProductTabs.config';

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState('additionalInfo');

    const ActiveTabComponent = PRODUCT_TABS.find(
        (tab) => tab.id === activeTab
    )?.component;

    return (
        <section
            className={`
            h-[348px] 2xl:py-2 @2xl:py-0 overflow-y-scroll
            flex flex-col ${activeTab === 'additionalInfo' ? 'gap-0' : 'gap-10'} @2xl:gap-12`}
        >
            <div
                className="w-full flex flex-col @2xl:flex-row @2xl:gap-20"
            >
                {PRODUCT_TABS.map((tab) => {
                    const isOpen = activeTab === tab.id;

                    return (
                        <div
                            key={tab.id}
                            className={`
                            pb-2 @2xl:pb-0
                            ${isOpen ? 'border-b border-b-n7100' : 'border-b border-b-n4100 @2xl:border-0'}`}
                        >
                            <button
                                onClick={() => setActiveTab(isOpen ? null : tab.id)}
                                className="w-full flex items-center justify-between"
                            >
                                <span
                                    className={`text-n4100 ${isOpen ? 'text-n7100' : ''} btn-m`}
                                >
                                    {tab.label}
                                </span>

                                <Icon
                                    name="ChevronDown"
                                    spanClassName="size-6 @2xl:hidden"
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

            {ActiveTabComponent && <ActiveTabComponent />}
        </section>
    );
}

export default ProductTabs;
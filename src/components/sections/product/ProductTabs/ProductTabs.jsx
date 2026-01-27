import { useState } from 'react';
import { ProductTabBtn } from '@ui';
import { PRODUCT_TABS } from './ProductTabs.config';

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState(null); // start with no tab open

    const handleTabClick = (tabId) => {
        setActiveTab(activeTab === tabId ? null : tabId);
    };

    return (
        <section
            className={`
                w-full px-8 @2xl:px-40 pb-20 @2xl:py-10
                flex flex-col @2xl:gap-10 @2xl:gap-12`}
        >
            {/* Render tab buttons */}
            <div className="flex flex-col @2xl:flex-row @2xl:gap-20">
                {PRODUCT_TABS.map((tab) => (
                    <ProductTabBtn
                        key={tab.id}
                        tab={tab}
                        isOpen={activeTab === tab.id}
                        onClick={handleTabClick}
                    />
                ))}
            </div>

            {/* Render active tab content */}
            <div className="">
                {PRODUCT_TABS.map((tab) =>
                    activeTab === tab.id ? <tab.component key={tab.id} /> : null
                )}
            </div>
        </section>
    );
};

export default ProductTabs;
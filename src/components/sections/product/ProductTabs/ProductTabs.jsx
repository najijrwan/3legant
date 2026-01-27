import { useState } from 'react';
import { useProduct } from '@product';
import ProductTabsInline from './variants/ProductTabsInline';
import ProductTabsSection from './variants/ProductTabsSection';
import { PRODUCT_TABS } from './ProductTabs.config';
import { useBreakpoint } from '@hooks';

const ProductTabs = ({ }) => {
    const { canShowRecommendations } = useProduct();
    const { isMobile } = useBreakpoint();

    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tabId) => {
        setActiveTab(activeTab === tabId ? null : tabId);
    }

    if (canShowRecommendations || isMobile)
        return <ProductTabsInline
            tabs={PRODUCT_TABS}
            activeTab={activeTab}
            onTabClick={handleTabClick}
        />

    return <ProductTabsSection
        tabs={PRODUCT_TABS}
        activeTab={activeTab}
        onTabClick={handleTabClick}
    />
}

export default ProductTabs;
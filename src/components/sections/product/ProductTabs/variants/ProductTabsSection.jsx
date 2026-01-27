import { ProductTabBtn } from '@ui';

const ProductTabsSection = ({ tabs, activeTab, onTabClick }) => {
    return (
        <>
            <div className="@container flex flex-row gap-20">
                {tabs.map((tab) => (
                    <ProductTabBtn
                        key={tab.id}
                        tab={tab}
                        isOpen={activeTab === tab.id}
                        onClick={onTabClick}
                    />
                ))}
            </div>
            <div>
                {tabs.map((tab) =>
                    activeTab === tab.id ? <tab.component key={tab.id} /> : null
                )}
            </div>
        </>
    );
};

export default ProductTabsSection;

import { ProductTabBtn } from '@ui';

const ProductTabsInline = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="flex flex-col">
            {tabs.map((tab) => (
                <div key={tab.id}>
                    <ProductTabBtn
                        tab={tab}
                        isOpen={activeTab === tab.id}
                        onClick={onTabClick}
                    />
                    {activeTab === tab.id ? <tab.component /> : null}
                </div>
            ))}
        </div>
    );
};

export default ProductTabsInline;

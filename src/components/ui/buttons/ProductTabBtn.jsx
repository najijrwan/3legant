import { Icon } from '@ui';

const ProductTabBtn = ({ tab, isOpen, onClick }) => {
    return (
        <div
            key={tab.id}
            className={`
                pb-2 @2xl:pb-0
                ${isOpen
                    ? 'border-b border-b-n7100'
                    : 'border-b border-b-n4100 @2xl:border-0'}
            `}
        >
            <button
                onClick={() => onClick(tab.id)}
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
};

export default ProductTabBtn;

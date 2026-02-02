import { Icon } from '@ui';
import { useBreakpoint } from '@hooks';

const Selectors = ({ activeSelector, onClick }) => {
    const { isMobile } = useBreakpoint();

    const base = ['Grid4x2', 'Grid4x1'];

    const items = isMobile
        ? base
        : ['Grid3x3', 'Grid4x4', ...base];

    const handleSelectorClick = (selector) => {
        if (onClick) {
            onClick(selector);
        }
    };

    return (
        <div
            className='flex border border-black-200'
        >
            {items.map((item, i) => (
                <button
                    key={i}
                    onClick={() => handleSelectorClick(item)}
                    className={`
                    w-[46px] h-[40px]
                    flex items-center justify-center
                    border transition-colors
                    ${activeSelector === item
                            ? 'border-black-900 bg-black-900'
                            : 'border-n3100 bg-white hover:bg-n1100'
                        }`}
                >
                    <Icon
                        name={item}
                        spanClassName='size-6'
                        iconClassName={`size-[18px] ${activeSelector === item
                                ? 'text-white'
                                : 'text-n4100'
                            }`}
                    />
                </button>
            ))}
        </div>
    )
}

export default Selectors;
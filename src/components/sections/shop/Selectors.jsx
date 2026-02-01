import { Icon } from '@ui';
import { useBreakpoint } from '@hooks';

const Selectors = () => {
    const { isMobile } = useBreakpoint();

    const base = ['Grid4x2', 'Grid4x1'];

    const items = isMobile
        ? base
        : ['Grid3x3', 'Grid4x4', ...base];
    return (
        <div
            className='flex border border-black-200'
        >
            {items.map((item, i) => (
                <button
                    key={i}
                    className='
                    w-[46px] h-[40px]
                    flex items-center justify-center
                    border border-n3100'
                >
                    <Icon
                        name={item}
                        spanClassName='size-6'
                        iconClassName='size-[18px] text-n4100'
                    />
                </button>
            ))}
        </div>
    )
}

export default Selectors;
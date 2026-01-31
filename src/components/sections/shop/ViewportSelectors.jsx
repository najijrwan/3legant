import { Icon } from '@ui';
import { useBreakpoint } from '@hooks';

const ViewportSelectors = () => {
    const { isMobile } = useBreakpoint();

    const iconNames = isMobile
        ? ['Grid4x2', 'Grid4x1']
        : ['Grid3x3', 'Grid4x4', 'Grid4x2', 'Grid4x1'];

    return (
        <div className='flex border border-black-200'>
            {iconNames.map((iconName) => (
                <button
                    key={iconName}
                    className='
                    w-[46px] h-[40px]
                    flex justify-center items-center
                    border border-n3100'
                >
                    <Icon
                        name={iconName}
                        spanclassName="size-6"
                        iconClassName="size-4.5 text-n4100"
                    />
                </button>
            ))}
        </div>
    );
};

export default ViewportSelectors;

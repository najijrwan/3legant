import { Icon } from '@ui';
import { useBreakpoint } from '@hooks';

const ViewportSelectors = () => {
    const { isMobile } = useBreakpoint();

    const iconNames = isMobile
        ? ['Grid4x2', 'Grid4x1']
        : ['Grid3x3', 'Grid4x4', 'Grid4x2', 'Grid4x1'];

    return (
        <>
            {iconNames.map((iconName) => (
                <button className='
                    w-[46px] h-[40px]
                    flex justify-center items-center
                    border border-n3100'
                >
                    <Icon
                        key={iconName}
                        name={iconName}
                        spanclassName="size-6"
                        iconClassName="size-4.5 text-n4100"
                    />
                </button>
            ))}
        </>
    );
};

export default ViewportSelectors;

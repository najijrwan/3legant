import { Icon } from '@ui';

const MoreActionBtn = ({
    label,
    buttonClass = 'shadow-n7100',
    labelClass = 'btn-xs 2xl:btn-s text-n7100',
    iconSpanClass = 'size-4 2xl:size-5',
    iconClass = 'w-[9.33px] h-[8px] 2xl:w-[11.67px] h-[10px]',
}) => {
    return (
        <button
            className={`
            w-fit
            flex items-center gap-1
            shadow-line
            ${buttonClass}`}
        >
            <span className={labelClass}>{label}</span>

            <Icon
                name="ArrowRight"
                spanClassName={iconSpanClass} iconClassName={iconClass}
            />
        </button>
    );
};

export default MoreActionBtn;

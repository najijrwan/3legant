import { Icon } from '@ui';

const MoreActionBtn = ({
    label,
    buttonClass = '',
    labelClass = '',
    iconSpanClass = '',
    iconClass = '',
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

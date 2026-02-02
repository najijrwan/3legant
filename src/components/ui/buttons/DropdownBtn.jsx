import { Icon } from '@ui';

const DropdownBtn = ({ items }) => {
    return (
        <div className='flex flex-col gap-2'>
            <button
                className='
                relative
                p-2 pl-4
                flex items-center justify-between
                border-2 border-n4100 rounded-lg'>
                <p className='text-n7100 body-2-semi'>Living Room</p>

                <span className='p-1'>
                    <Icon
                        name="ChevronDown"
                        spanClassName="size-6"
                        iconClassName="w-[11px] h-[18px] text-n4100"
                    />
                </span>
            </button>
            <div
                className='
                hidden p-2
                flex flex-col gap-2.5
                shadow-2'
            >
                {items.map((item, index) => (
                    <p
                        key={index}
                        className='w-full p-2 text-n4100 body-2'
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default DropdownBtn;
import { Icon } from '@ui';

const DropdownBtn = () => {
    return (
        <button
            className='
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
    )
}

export default DropdownBtn;
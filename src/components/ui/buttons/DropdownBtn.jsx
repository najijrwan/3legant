import { Icon } from '@ui';

const DropdownBtn = ({ items }) => {
    return (
        <button className='relative p-2 pl-4 flex items-center justify-between'>
            <p className='text-n7100 body-2-semi'>Living Room</p>

            <span className='p-1'>
                <Icon
                    name="ChevronDown"
                    spanClassName="size-6"
                    iconClassName="w-[5.5px] h-[9px] text-n4100"
                />
            </span>

            <div className='absolute top-2 p-2 flex flex-col gap-2.5'>
                {items.map((item, index) => (
                    <button
                        key={index}
                        className='w-full p-2 text-n4100 body-2'
                    >
                        {item}
                    </button>
                ))}
            </div>
        </button>
    )
}

export default DropdownBtn;
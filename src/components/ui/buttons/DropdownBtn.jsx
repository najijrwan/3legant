import { Icon } from '@ui';

const DropdownBtn = ({ items }) => {
    return (
        <>
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

            <div
                className='
                2xl:absolute -bottom-2 2xl:translate-y-full z-20
                hidden 2xl:w-[262px] p-2
                flex flex-col gap-2.5
                bg-white border-[1.5px] border-n2100 rounded-xl shadow-2'
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
        </>
    )
}

export default DropdownBtn;
import { Icon } from '@ui';

const DropdownBtn = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='
            w-full p-2 pl-4
            flex items-center justify-between
            border-2 border-n4100 rounded-lg'
        >
            <p className='text-n7100 body-2-semi'>Living Room</p>

            <Icon
                name="ArrowDownSimple"
                spanClassName="p-1 size-6"
                iconClassName="w-[9px] h-[6px] text-n4100"
            />
        </button>
    )
}

export default DropdownBtn;
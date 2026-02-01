import { Icon } from '@ui';

const SortBtn = () => {
    return (
        <button
            className='
            flex items-center gap-1
            text-black-900 body-2-semi'
        >
            <span>Sort by</span>
            <Icon
                name='ChevronDown'
                spanClassName='size-5'
                iconClassName='w-[10px] h-[5px]'
            />
        </button>
    )
}

export default SortBtn;
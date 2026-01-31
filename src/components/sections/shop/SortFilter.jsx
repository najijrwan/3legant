import { Icon } from '@ui';

const SortFilter = () => {
    return (
        <button className='text-black-900 flex items-center gap-1'>
            <p className='body-2-semi'>Sort by</p>
            <Icon name="ChevronDown" spanClassName='size-5' iconClassName="w-[10px] h-[5px]" />
        </button>
    )
}

export default SortFilter;
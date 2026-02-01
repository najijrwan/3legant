import { DropdownBtn } from '@ui';

const FilterType = ({ type, items }) => {
    return (
        <div
            className='flex flex-col gap-2'
        >
            <header className='text-n4100 body-2-semi'>{type}</header>

            <DropdownBtn
                items={items}
            />
        </div>
    )
}

export default FilterType;
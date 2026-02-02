import { DropdownBtn } from '@ui';

const Filter = ({ type, items }) => {
    return (
        <>
            <header className='text-n4100 body-2-semi' >
                {type}
            </header >

            <div className='relative w-full 2xl:w-[262px] flex flex-col gap-2'>
                <DropdownBtn items={items} />
            </div>
        </>
    )
}

export default Filter;
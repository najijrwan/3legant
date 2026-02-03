import { DropdownBtn, DropdownOptions } from '@ui';

const Filter = ({ type, activeSelector3x3, items }) => {
    return (
        <>
            <header className='text-n4100 body-2-semi' >
                {type}
            </header >

            {activeSelector3x3 && (
                <DropdownOptions items={items} />
            )}

            {!activeSelector3x3 && (
                <div className='relative w-full 2xl:w-[262px] flex flex-col gap-2'>
                    <DropdownBtn items={items} />

                    <DropdownOptions
                        items={items}
                        className='2xl:absolute 2xl:-bottom-2 2xl:translate-y-full 2xl:z-20'
                    />
                </div>
            )}
        </>
    )
}

export default Filter;
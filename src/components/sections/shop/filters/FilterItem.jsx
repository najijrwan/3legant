import { useState } from 'react';
import { DropdownBtn, DropdownOptions } from '@ui';

const FilterItem = ({ type, activeSelector3x3, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            <header className={`${activeSelector3x3 ? 'text-black-900' : 'text-n4100'} body-2-semi`}>
                {type}
            </header >

            {activeSelector3x3 && (
                <DropdownOptions
                    items={items}
                    variant='alt'
                />
            )}

            {!activeSelector3x3 && (
                <div className='relative w-full 2xl:w-[262px] flex flex-col gap-2'>
                    <DropdownBtn items={items} onClick={handleClick} />

                    <DropdownOptions items={items} variant='default' isOpen={isOpen} />
                </div>
            )}
        </>
    )
}

export default FilterItem;
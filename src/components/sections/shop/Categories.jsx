import { Icon } from '@ui';

const Categories = () => {
    return (
        <div
            className='flex flex-col gap-2'
        >
            <header className='text-n4100 body-2-semi'>CATEGORIES</header>

            <button className='p-2 pl-4 flex items-centerjustify-between'>
                <p className='text-n7100 body-2-semi'>Living Room</p>

                <span className='p-1'>
                    <Icon
                        name="ChevronDown"
                        spanClassName="size-6"
                        iconClassName="w-[5.5px] h-[9px] text-n4100"
                    />
                </span>
            </button>

            
        </div>
    )
}
import { Icon, DropdownBtn } from '@ui';
import { CATEGORIES } from '@data';

const Categories = () => {
    return (
        <div
            className='flex flex-col gap-2'
        >
            <header className='text-n4100 body-2-semi'>CATEGORIES</header>

            <DropdownBtn
                items={CATEGORIES}
            />
        </div>
    )
}

export default Categories;
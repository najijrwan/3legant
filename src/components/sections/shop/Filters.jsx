import { Filter } from '@shop';
import { CATEGORIES, PRICES } from '@data';

const Filters = () => {
    return (
        <div className='flex flex-col gap-6'>
            <Filter
                type="CATEGORIES"
                items={CATEGORIES}
            />

            <Filter
                type="PRICE"
                items={PRICES}
            />
        </div>
    )
}

export default Filters;
import { FilterType } from '@shop';
import { CATEGORIES } from '@data';

const Filters = () => {
    return (
        <div className='flex flex-col gap-6'>
            <FilterType
                type="CATEGORIES"
                items={CATEGORIES}
            />

            {/* <FilterType
                type="PRICE"
                items={PRICES}
            /> */}
        </div>
    )
}

export default Filters;
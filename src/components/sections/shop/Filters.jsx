import { Filter } from '@shop';
import { CATEGORIES, PRICES } from '@data';

const Filters = ({ activeSelector3x3 }) => {
    return (
        <>
            <div className={`flex flex-col ${activeSelector3x3 ? 'gap-4' : 'gap-2'}`}>
                <Filter
                    type="CATEGORIES"
                    items={CATEGORIES}
                    activeSelector3x3={activeSelector3x3}
                />
            </div>

            <div className={`flex flex-col ${activeSelector3x3 ? 'gap-4' : 'gap-2'}`}>
                <Filter
                    type="PRICE"
                    items={PRICES}
                    activeSelector3x3={activeSelector3x3}
                />
            </div>
        </>
    )
}

export default Filters;
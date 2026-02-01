import { Filters, ViewportSelectors } from '@shop';

const Toolbar = () => {
    return (
        <div
            className='
                p-8 flex flex-col gap-8'
        >
            <Filters />

            <ViewportSelectors />
        </div>
    )
}

export default Toolbar;
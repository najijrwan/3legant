import { SortBtn, Selectors } from '@shop';

const ViewportSelectors = () => {
    return (
        <div
            className='py-2 flex items-center justify-between'
        >
            <SortBtn />

            <Selectors />
        </div>
    )
};

export default ViewportSelectors;

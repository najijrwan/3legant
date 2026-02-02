import { SortBtn, Selectors } from '@shop';

const ViewportSelectors = ({ activeSelector, onClick }) => {
    return (
        <div
            className='py-2 flex items-center justify-between'
        >
            <SortBtn />

            <Selectors activeSelector={activeSelector} onClick={onClick} />
        </div>
    )
};

export default ViewportSelectors;

import { SortBtn, Selectors } from '@shop';

const ViewportSelectors = ({ activeSelector, onClick }) => {
    return (
        <>
            
            <SortBtn />

            <Selectors activeSelector={activeSelector} onClick={onClick} />
        </>
    )
};

export default ViewportSelectors;

import { SortButton, Selectors } from '@shop';

const ViewSelectors = ({ activeSelector, onClick }) => {
    return (
        <>

            <SortButton />

            <Selectors activeSelector={activeSelector} onClick={onClick} />
        </>
    )
};

export default ViewSelectors;

import { SortButton, Selectors } from '@toolbar';

const ViewSelectors = ({ activeSelector, onClick }) => {
    return (
        <>

            <SortButton />

            <Selectors activeSelector={activeSelector} onClick={onClick} />
        </>
    )
};

export default ViewSelectors;

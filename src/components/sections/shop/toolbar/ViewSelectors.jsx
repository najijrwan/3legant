import { SortButton, Selectors } from '@toolbar';

export const ViewSelectors = ({ activeSelector, onClick }) => {
    return (
        <>

            <SortButton />

            <Selectors activeSelector={activeSelector} onClick={onClick} />
        </>
    )
};

export default ViewSelectors;

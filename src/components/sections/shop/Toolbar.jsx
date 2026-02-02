import { Filters, ViewportSelectors } from '@shop';

const Toolbar = ({ activeSelector, onClick }) => {
    return (
        <div
            className='
                p-8 2xl:p-0 flex flex-col 2xl:flex-row 2xl:justify-between gap-8'
        >
            <Filters />

            <ViewportSelectors activeSelector={activeSelector} onClick={onClick} />
        </div>
    )
}

export default Toolbar;
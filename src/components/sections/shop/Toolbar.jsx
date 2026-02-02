import { Filters, ViewportSelectors } from '@shop';

const Toolbar = ({ activeSelector, onClick }) => {
    return (
        <div
            className='
                p-8 2xl:p-0 flex flex-col gap-8'
        >
            <Filters />

            <ViewportSelectors activeSelector={activeSelector} onClick={onClick} />
        </div>
    )
}

export default Toolbar;
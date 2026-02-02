import { Filters, ViewportSelectors } from '@shop';

const Toolbar = ({ activeSelector, onClick }) => {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <Filters />
            </div>

            <div
                className='py-2 2xl:py-0 flex items-center justify-between gap-8'
            >
                <ViewportSelectors
                    activeSelector={activeSelector}
                    onClick={onClick}
                />
            </div>
        </>
    )
}

export default Toolbar;
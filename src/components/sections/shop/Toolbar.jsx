import { Filters, ViewportSelectors } from '@shop';

const Toolbar = ({ activeSelector, onClick }) => {
    return (
        <>
            {activeSelector === 'Grid3x3' && (
                <p className='text-n7100 body-1-semi'>Living Room</p>
            )}

            <div className='2xl:hidden flex flex-col 2xl:flex-row gap-6'>
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
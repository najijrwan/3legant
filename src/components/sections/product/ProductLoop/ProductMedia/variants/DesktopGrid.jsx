import { Badges } from '@ui';

const DesktopGrid = ({ images }) => {
    return (
        <div className="grid grid-cols-2 grid-row-3 gap-6">
            {images.map((image, i) => (
                <div
                    key={i}
                    className='relative w-[262px] h-[349px] bg-n2100'
                >
                    <img
                        src={image}
                        alt=""
                        className={`size-full ${i === 0 ? 'h-85' : ''} object-cover`}
                    />

                    {i === 0 ? <Badges variant='large' /> : ''}
                </div>
            ))}
        </div>
    )
}

export default DesktopGrid;
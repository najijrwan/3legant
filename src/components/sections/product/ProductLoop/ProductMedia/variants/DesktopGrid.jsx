const DesktopGrid = ({ images }) => {
    return (
        <div className="grid grid-cols-2 grid-row-3 gap-6">
            {images.map((image, i) => (
                <div
                    key={i}
                    className='w-[262px] h-[349px]'
                >
                    <img
                        src={image}
                        alt=""
                        className="size-full object-cover" />
                </div>
            ))}
        </div>
    )
}

export default DesktopGrid;


const ProductMeta = ({ hasRecommendationa = true }) => {
    return (
        <div className={`py-6 ${hasRecommendationa ? '2xl:py-4' : ''} flex flex-col gap-2`}>
            <p className='flex gap-[98px]'>
                <span className='text-n4100 caption-2'>SKU</span>
                <span className='text-n7100 caption-2'>1117</span>
            </p>

            <div className='flex gap-[58px]'>
                <p className='text-n4100 caption-2'>Category</p>
                <p className='text-n7100 caption-2'>Living Room, Bedroom</p>
            </div>
        </div>
    )
}

export default ProductMeta;
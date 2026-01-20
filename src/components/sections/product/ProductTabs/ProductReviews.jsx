import { Icon, ProductRating } from '@ui';
import { PRODUCT_REVIEWS } from "@data";

const ProductReviews = () => (
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-8 2xl:gap-7.5'>
            <div className='flex flex-col gap-6'>
                <p className='text-n2 h7 2xl:h6'>Customer Reviews</p>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <ProductRating rating={4} />
                        <span className='text-n7100 caption-2'>11 Reviews</span>
                    </div>

                    <div className='flex gap-2'>
                        <p className='text-n7100 caption-1'>Be the first to review</p>
                        <p className='text-n2 caption-1-semi 2xl:body-2-semi'>Tray Table</p>
                    </div>
                </div>
            </div>

            <div
                className='
                        w-full pl-6 pr-4 py-4
                        flex items-center justify-between
                        rounded-2xl border-2 border-n3100'
            >
                <form className='h-fit'>
                    <input
                        type="text"
                        placeholder='Share your thoughts'
                        className='
                                text-n4100 caption-1
                                2xl:placeholder-transparent outline-none'
                    />
                </form>

                <button
                    className='
                            p-1 2xl:px-10 2xl:py-1.5
                            flex items-center justify-center
                            bg-n7100 rounded-full'
                >
                    <span className='hidden 2xl:inline text-white btn-s'>Write Review</span>
                    <Icon
                        name='ArrowRightLong'
                        spanClassName='2xl:hidden size-6'
                        iconClassName='w-[14px] h-[9px]'
                    />
                </button>
            </div>
        </div>

        <div className='w-full flex flex-col gap-10'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between gap-6'>
                <h6 className='text-black'>11 Reviews</h6>

                <div
                    className='
                            w-full max-w-[256px] pl-4 py-2 pr-2
                            flex items-center justify-between
                            border-2 border-n3100 rounded-lg'
                >
                    <p className='text-n7100 body-2-semi'>Newest</p>

                    <span className='size-8 flex items-center justify-center'>
                        <Icon
                            name='ChevronDown'
                            spanClassName='size-6'
                            iconClassName='w-[9px] h-[5.5px] text-n4100'
                        />
                    </span>
                </div>
            </div>

            <div className='w-full flex flex-col gap-6'>
                {PRODUCT_REVIEWS.map((review) => (
                    <div
                        key={review.name}
                        className='pb-4 2xl:pb-6 border-b border-b-n3100'
                    >
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4 2xl:gap-10'>
                                <img
                                    src={review.avatar}
                                    alt=""
                                    className="size-[72px]"
                                />

                                <div className='flex flex-col gap-4'>
                                    <header className='text-n7100 body-1-semi [word-spacing:4px]'>
                                        {review.name}
                                    </header>

                                    <ProductRating rating={review.rating} />
                                </div>
                            </div>

                            <p className='2xl:ml-[112px] text-n3 body-2'>
                                {review.comment}
                            </p>

                            <div className='2xl:ml-[112px] flex gap-4'>
                                <p className='text-n2 caption-2'>about 1 hours ago</p>

                                <button className='text-n2 caption-2-semi'>Like</button>

                                <button className='text-n2 caption-2-semi'>Reply</button>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    className='
                            w-fit mx-auto px-10 py-1.5 
                            rounded-[80px] border border-b7100 btn-s'
                >
                    Load More
                </button>
            </div>
        </div>
    </div>
)

export default ProductReviews;
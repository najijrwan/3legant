import ReviewsSummary from './ReviewsSummary';
import ReviewList from './ReviewsList';

const ProductReviews = () => (
    <div className='flex flex-col gap-10'>
        <ReviewsSummary />
        <ReviewList />
    </div>
)

export default ProductReviews;
import ProductReviewsSummary from './ProductReviewsSummary';
import ProductReviewList from './ProductReviewsList';

const ProductReviews = () => (
    <div className='flex flex-col gap-10'>
        <ProductReviewsSummary />
        <ProductReviewList />
    </div>
)

export default ProductReviews;
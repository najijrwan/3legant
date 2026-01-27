import ProductReviewsSummary from './ProductReviewsSummary';
import ProductReviewList from './ProductReviewsList';

const ProductReviews = () => (
    <div className='mt-10 @2xl:mt-12 flex flex-col gap-10'>
        <ProductReviewsSummary />
        <ProductReviewList />
    </div>
)

export default ProductReviews;
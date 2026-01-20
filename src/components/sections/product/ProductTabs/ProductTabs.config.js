import ProductAdditionalInfo from './ProductAdditionalInfo';
import ProductReviews from './ProductReviews';

export const PRODUCT_TABS = [
    {
        id: 'additionalInfo',
        label: 'Additional Info',
        component: ProductAdditionalInfo,
    },
    {
        id: "reviews",
        label: 'Reviews',
        component: ProductReviews,
    }
]
import ProductAdditionalInfo from './renders/ProductAdditionalInfo';
import ProductReviews from './renders/ProductReviews';

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
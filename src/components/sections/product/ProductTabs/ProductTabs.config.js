import ProductAdditionalInfo from './ProductAdditionalInfo/ProductAdditionalInfo';
import ProductReviews from './ProductReviews/ProductReviews';

export const PRODUCT_TABS = [
    {
        id: 'additionalInfo',
        label: 'Additional Info',
        component: ProductAdditionalInfo,
    },
    {
        id: 'questions',
        label: 'Questions',
        component: ProductAdditionalInfo,
    },
    {
        id: "reviews",
        label: 'Reviews',
        component: ProductReviews,
    },
]
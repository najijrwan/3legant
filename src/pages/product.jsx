import { ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { NewArrivals } from '@home';
const ProductPage = ({ hasRecommendation = true }) => {
    return (
        <>
            <ProductBreadcrumbs />

            <ProductLoop />

            <ProductTabs />

            {hasRecommendation && (
                <NewArrivals title='You might also like'/>
            )}
        </>
    );
}

export default ProductPage;
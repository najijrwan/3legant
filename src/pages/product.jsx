import { ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { NewArrivals } from '@home';
const ProductPage = ({ hasRecommendation = true }) => {
    return (
        <>
            <ProductBreadcrumbs />

            <ProductLoop />

            {!hasRecommendation && (
                <section className="@container px-8 2xl:px-40">
                    <ProductTabs />
                </section>
            )}

            {hasRecommendation && (
                <NewArrivals title='You might also like' />
            )}
        </>
    );
}

export default ProductPage;
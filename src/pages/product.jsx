import { ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { NewArrivals } from '@home';
import { useProduct } from '@product';
const ProductPage = () => {
    const { canShowRecommendations } = useProduct();

    return (
        <>
            <ProductBreadcrumbs />

            <ProductLoop />

            {!canShowRecommendations && (
                <section className="@container px-8 2xl:px-40">
                    <ProductTabs />
                </section>
            )}

            {canShowRecommendations && (
                <NewArrivals title='You might also like' />
            )}
        </>
    );
}

export default ProductPage;
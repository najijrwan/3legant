import { useProduct, ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { NewArrivals } from '@home';

const ProductPage = () => {
    const { canShowRecommendations } = useProduct();
    return (
        <>
            <ProductBreadcrumbs />

            <ProductLoop />

            {!canShowRecommendations && (
                <div className='w-full px-8 pb-20'>
                    <ProductTabs />
                </div>
            )}

            {canShowRecommendations && (
                <NewArrivals title='You might also like' />
            )}
        </>
    );
}

export default ProductPage;
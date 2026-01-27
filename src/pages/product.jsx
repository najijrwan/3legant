import { useProduct, ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { NewArrivals } from '@home';
import { useBreakpoint } from '@hooks';

const ProductPage = () => {
    const { canShowRecommendations } = useProduct();
    const { isMobile } = useBreakpoint();

    return (
        <>
            <ProductBreadcrumbs />

            <ProductLoop />

            {!canShowRecommendations || isMobile && (
                <div className='@container w-full px-8 pb-20'>
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
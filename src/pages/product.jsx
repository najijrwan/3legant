import { useProduct, ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { NewArrivals } from '@home';
import { useBreakpoint } from '@hooks';

const ProductPage = () => {
    const { canShowRecommendations } = useProduct();
    const { isMobile } = useBreakpoint();

    console.log('can: ', canShowRecommendations);
    console.log('mobile: ', isMobile);

    return (
        <>
            <ProductBreadcrumbs />

            <ProductLoop />

            {(!canShowRecommendations || isMobile) && (
                <div className='@container w-full px-8 pb-20 2xl:px-40 2xl:py-10 mt-6 2xl:mt-0'>
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
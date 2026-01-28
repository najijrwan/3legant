import { useProduct } from '../context/ProductContext';
import { useBreakpoint } from '@hooks';
import { ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { NewArrivals } from '@home';

const ProductLayout = () => {
  const { canShowRecommendations } = useProduct();
  const { isMobile } = useBreakpoint();

  // 🔒 CENTRALIZED LAYOUT FLAGS
  const layout = {
    showRecommendations: canShowRecommendations,
    isMobile,

    showTabsInline: canShowRecommendations && !isMobile,
    showTabsSection: !canShowRecommendations || isMobile,

    useDesktopMedia: canShowRecommendations && !isMobile,
    showOfferCountdown: !canShowRecommendations || isMobile,
  };

  console.log('showRecommendations: ', layout.showRecommendations);
  console.log('isMobile: ', layout.isMobile);
  console.log('showTabsInline: ', layout.showTabsInline);
  console.log('showTabsSection: ', layout.showTabsSection);
  console.log('useDesktopMedia: ', layout.useDesktopMedia);
  console.log('showOfferCountdown: ', layout.showOfferCountdown);

  return (
    <>
      <ProductBreadcrumbs />

      <ProductLoop layout={layout} />

      {(!layout.showRecommendations && !layout.isMobile) && (
        <div className="@container w-full px-40 py-10">
          <ProductTabs variant='section' layout={layout}/>
        </div>
      )}

      {layout.showRecommendations && (
        <NewArrivals title="You might also like" />
      )}
    </>
  );
};

export default ProductLayout;

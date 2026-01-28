import useProduct from '../context/ProductContext';
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

    showTabsInline: canShowRecommendations || isMobile,
    showTabsBelow: !canShowRecommendations && !isMobile,

    useDesktopMedia: canShowRecommendations && !isMobile,
    showOfferCountdown: !canShowRecommendations || isMobile,
  };

  return (
    <>
      <ProductBreadcrumbs />

      <ProductLoop layout={layout} />

      {layout.showTabsBelow && (
        <div className="@container w-full px-8 pb-20 2xl:px-40 2xl:py-10">
          <ProductTabs variant="section" />
        </div>
      )}

      {layout.showRecommendations && (
        <NewArrivals title="You might also like" />
      )}
    </>
  );
};

export default ProductLayout;

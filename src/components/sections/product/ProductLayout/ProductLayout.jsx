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

    showTabsInline: canShowRecommendations || isMobile,
    showTabsSection: !canShowRecommendations && !isMobile,

    useDesktopMedia: canShowRecommendations && !isMobile,
    showOfferCountdown: !canShowRecommendations || isMobile,
  };

  return (
    <>
      <ProductBreadcrumbs />

      <ProductLoop layout={layout} />

      {layout.showTabsSection && (
        <section className="@container px-40 py-10">
          <ProductTabs variant='section' layout={layout} />
        </section>
      )}

      {layout.showRecommendations && (
        <NewArrivals title="You might also like" />
      )}
    </>
  );
};

export default ProductLayout;

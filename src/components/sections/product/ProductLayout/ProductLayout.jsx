import { useProduct } from '../context/ProductContext';
import { useBreakpoint } from '@hooks';
import { ProductBreadcrumbs, ProductLoop, ProductTabs } from '@product';
import { CarouselSection } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';

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
        <CarouselSection
          title="You might also like"
          variant="alt"
          carouselActionVariant="default"
          items={HOME_NEW_ARRIVALS}
        />
      )}
    </>
  );
};

export default ProductLayout;

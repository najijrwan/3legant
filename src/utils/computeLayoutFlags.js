export const computeLayoutFlags = ({ canShowRecommendations, isMobile }) => {
    return {
        showRecommendations: canShowRecommendations,
        isMobile,

        showTabsInline: canShowRecommendations || isMobile,
        showTabsSection: !canShowRecommendations && !isMobile,

        useDesktopMedia: canShowRecommendations && !isMobile,
        showOfferCountdown: !canShowRecommendations || isMobile,
    }
};
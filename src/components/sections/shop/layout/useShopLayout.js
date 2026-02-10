import { GRID_LAYOUT } from '@shop/state'

export const useShopLayout = ({ activeSelector, isMobile }) => {
  const getGridClasses = () => {
    switch (activeSelector) {
      case GRID_LAYOUT.GRID_3X3:
        return 'grid-rows-3 grid-cols-3'
      case GRID_LAYOUT.GRID_4X4:
        return 'grid-rows-4 grid-cols-4'
      case GRID_LAYOUT.GRID_4X2:
        return 'grid-rows-4 grid-cols-2'
      case GRID_LAYOUT.GRID_4X1:
        return 'grid-rows-4 grid-cols-1'
      default:
        return 'grid-rows-3 grid-cols-3'
    }
  }

  const isVerticalCard =
    activeSelector === GRID_LAYOUT.GRID_3X3 ||
    activeSelector === GRID_LAYOUT.GRID_4X4 ||
    (activeSelector === GRID_LAYOUT.GRID_4X2 && isMobile)

  const isHorizontalCard =
    (activeSelector === GRID_LAYOUT.GRID_4X2 && !isMobile) ||
    activeSelector === GRID_LAYOUT.GRID_4X1

  const cardVariant =
    activeSelector === GRID_LAYOUT.GRID_4X2 ? 'sm' : 'md'

  return {
    gridClasses: getGridClasses(),
    isVerticalCard,
    isHorizontalCard,
    cardVariant,
  }
}

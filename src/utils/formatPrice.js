export const formatPrice = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, // ensures 32 → 32.00
        maximumFractionDigits: 2,
    }).format(value);
};

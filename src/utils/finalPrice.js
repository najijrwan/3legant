export const finalPrice = (price, discountPercentage) => {
    const discountPrice = price * (discountPercentage / 100);
    let result = 0;
    if (discountPrice % 10 === 0)
        result = discountPrice - 1;
    else if (discountPrice % 5 === 0 || discountPrice % 2 === 0)
        result = discountPrice - 0.01
    else
        result = discountPrice;
    return result;
}
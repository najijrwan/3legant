export const finalPrice = (value) => {
    let result = 0;
    if (value % 10 === 0)
        result = value - 1;
    else if (value % 5 === 0 || value % 2 === 0)
        result = value - 0.01
    else
        result = value;
    return result;
}
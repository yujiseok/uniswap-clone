type CalculatePriceFn = (
  topToken: Token,
  bottomToken: Token | undefined,
  swapValue: string
) => string;

const calculatePrice: CalculatePriceFn = (topToken, bottomToken, swapValue) => {
  let bottomPrice = 0;

  if (bottomToken) {
    if (topToken.price > bottomToken.price) {
      bottomPrice = Number(swapValue) * topToken.price;
    } else if (topToken.price < bottomToken.price) {
      bottomPrice = (Number(swapValue) * topToken.price) / bottomToken.price;
    } else {
      bottomPrice = Number(swapValue);
    }
  }

  return bottomPrice.toString();
};
export default calculatePrice;

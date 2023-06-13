type CalculatePriceFn = (
  topToken: Token,
  bottomToken: Token | undefined,
  swapValue: string
) => string;

const calculatePrice: CalculatePriceFn = (topToken, bottomToken, swapValue) => {
  let bottomPrice = "";

  if (bottomToken) {
    if (topToken.price > bottomToken.price) {
      bottomPrice = (Number(swapValue) * topToken.price).toString();
    } else if (topToken.price < bottomToken.price) {
      bottomPrice = (
        (Number(swapValue) * topToken.price) /
        bottomToken.price
      ).toString();
    } else {
      bottomPrice = swapValue;
    }
  }

  return bottomPrice;
};
export default calculatePrice;

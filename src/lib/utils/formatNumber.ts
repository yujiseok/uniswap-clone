import formatter from "./formatter";

function formatNumber(stNumber: string, price: number) {
  const tokenPrice = Number(stNumber) * price;

  const units = [
    {
      value: 1000000000000,
      symbol: "T",
    },
    {
      value: 1000000000,
      symbol: "B",
    },
    {
      value: 1000000,
      symbol: "M",
    },
  ];

  for (const unit of units) {
    if (tokenPrice >= unit.value) {
      return "$" + (tokenPrice / unit.value).toFixed(2) + unit.symbol;
    }
  }

  return formatter.format(tokenPrice);
}

export default formatNumber;

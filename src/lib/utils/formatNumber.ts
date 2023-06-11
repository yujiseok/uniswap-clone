function formatNumber(stNumber: string, price: number) {
  const tokenPrice = Number(stNumber) * price;
  const formatter = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  });

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

  // if (tokenPrice >= 1000000000000) {
  //   return "$" + (tokenPrice / 1000000000000).toFixed(2) + "T";
  // }
  // if (tokenPrice >= 1000000000) {
  //   return "$" + (tokenPrice / 1000000000).toFixed(2) + "B";
  // }
  // if (tokenPrice >= 1000000) {
  //   return "$" + (tokenPrice / 1000000).toFixed(2) + "M";
  // }

  for (const unit of units) {
    if (tokenPrice >= unit.value) {
      return "$" + (tokenPrice / unit.value).toFixed(2) + unit.symbol;
    }
  }

  return formatter.format(tokenPrice);
}

export default formatNumber;

const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 5,
});

export default formatter;

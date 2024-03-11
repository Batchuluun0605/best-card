const CurrencyFormat = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const FormatCurrency = (number: Number) => {
  return CurrencyFormat.format(number);
};

export default FormatCurrency;

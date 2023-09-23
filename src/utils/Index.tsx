// fotmat currency to USD
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// regex format
export const regexFormat = (param: number) => {
  return param.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

// sperate number with comma
export const numberWithCommas = (number: number | string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
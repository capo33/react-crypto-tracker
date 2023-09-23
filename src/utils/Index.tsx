// sperate number with comma
export const numberWithCommas = (number: number | string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// options for axios request
export const options = (param: string) => ({
  method: "GET",
  url: param,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "100",
    offset: "0",
    ...(param && { name: param }),
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY as string,
    "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST as string,
  },
});

// sperate number with comma
export const numberWithCommas = (number: number | string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// options for axios request for rapidapi
export const options = (param: string, currency: string) => ({
  method: "GET",
  url: param,
  params: {
    referenceCurrencyUuid: currency,
    
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

// options for axios request for coinranking api
export const option = {
  headers: {
    "x-access-token":  process.env.REACT_APP_COINRANKING_API_KEY as string,
    "Content-Type": "application/json",
  },
};

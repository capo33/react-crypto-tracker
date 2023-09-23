import React, { createContext, useEffect, useState } from "react";

type CryptoContextProps = {
  children: React.ReactNode;
};
type CryptoContextType = {
  currency: string;
  setCurrency: (currency: string) => void;
  symbol: string;
};

export const CryptoContext = createContext<CryptoContextType>({
  currency: "USD",
  setCurrency: () => {},
  symbol: "$",
});

export const CryptoProvider = ({ children }: CryptoContextProps) => {
  const [currency, setCurrency] = useState<string>("USD");
  const [symbol, setSymbol] = useState<string>("$");

  useEffect(() => {
    currency === "USD" && setSymbol("$")
    currency === "EUR" && setSymbol("€")
    currency === "GBP" && setSymbol("£")
    currency === "EGY" && setSymbol("EGP£")
  }, [currency]);

  return (
    <CryptoContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CryptoContext.Provider>
  );
};
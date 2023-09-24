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
  currency: "yhjMzLPhuIDl",
  setCurrency: () => {},
  symbol: "$",
});

export const CryptoProvider = ({ children }: CryptoContextProps) => {
  const [currency, setCurrency] = useState<string>("yhjMzLPhuIDl");
  const [symbol, setSymbol] = useState<string>("$");

  useEffect(() => {
    currency === "yhjMzLPhuIDl" && setSymbol("$");
    currency === "5k-_VTxqtCEI" && setSymbol("€");
    currency === "Qwsogvtv82FCd" && setSymbol("₿");
  }, [currency]);

  return (
    <CryptoContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CryptoContext.Provider>
  );
};
import { useEffect, useState } from "react";

export const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //converting string response to json
      .then((res) => setData(res[currency])); //setting the data to the state
  }, [currency]);

  return data;
};

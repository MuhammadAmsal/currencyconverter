import "./currencyConverter.css";

import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [numberTo, setNumberTo] = useState("");
  const [numberFrom, setNumberFrom] = useState("");

  const controller = new AbortController();

  const apiCall = async () => {
    try {
      if (numberFrom && currencyFrom && currencyTo) {
        console.log(currencyFrom);
        console.log(currencyTo);
        console.log(numberFrom);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${numberFrom}&from=${currencyFrom}&to=${currencyTo}`,
          { signal: controller.signal }
        );

        const res = await response.json();

        console.log(res, "==>>res");
        setNumberTo(res.rates[currencyTo]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiCall();

    return function () {
      controller.abort();
    };
  }, [numberFrom, currencyFrom, currencyTo]);

  return (
    <>
      <div className="container">
        <div className="main">
          <div>
            <h1>Currency Converter</h1>
          </div>
          <div className="wrapper">
            <div className="column1">
              <select
                onChange={(e) => setCurrencyFrom(e.target.value)}
                className="currency"
              >
                <option>Select</option>
                <option>USD</option>
                <option>ZAR</option>
                <option>TRY</option>
                <option>THB</option>
                <option>SGD</option>
                <option>SEK</option>
                <option>RON</option>
                <option>PLN</option>
                <option>PHP</option>
                <option>PHP</option>
                <option>NZD</option>
                <option>NOK</option>
                <option>MYR</option>
                <option>MXN</option>
                <option>KRW</option>
                <option>JPY</option>
                <option>INR</option>
                <option>ILS</option>
                <option>IDR</option>
                <option>AUD</option>
                <option>BGN</option>
                <option>CHF</option>
                <option>BRL</option>
                <option>CAD</option>
                <option>CNY</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>HKD</option>
                <option>HUF</option>
              </select>

              <input
                type="number"
                value={numberFrom}
                onChange={(e) => setNumberFrom(e.target.value)}
                className="input_currency"
              />
            </div>

            <div className="column2">
              <select
                onChange={(e) => setCurrencyTo(e.target.value)}
                className="currency"
              >
                <option>Select</option>
                <option>USD</option>
                <option>ZAR</option>
                <option>TRY</option>
                <option>THB</option>
                <option>SGD</option>
                <option>SEK</option>
                <option>RON</option>
                <option>PLN</option>
                <option>PHP</option>
                <option>PHP</option>
                <option>NZD</option>
                <option>NOK</option>
                <option>MYR</option>
                <option>MXN</option>
                <option>KRW</option>
                <option>JPY</option>
                <option>INR</option>
                <option>ILS</option>
                <option>IDR</option>
                <option>AUD</option>
                <option>BGN</option>
                <option>CHF</option>
                <option>BRL</option>
                <option>CAD</option>
                <option>CNY</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>HKD</option>
                <option>HUF</option>
              </select>

              <input
                type="number"
                value={numberTo}
                disabled
                className="input_currency"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

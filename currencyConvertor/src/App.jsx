import { useState } from "react";
import { InputBox } from "./components";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center "
      style={{
        backgroundPosition: "center",

        backgroundImage: `url(https://b3381490.smushcdn.com/3381490/wp-content/uploads/2023/05/image6-min.png?lossy=2&strip=1&webp=1)`,
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="w-full flex justify-center items-center relative z-10 px-8 gap-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevIZLWUJFO29WRWt6gvjsgZVhyUiHs7pMow&s"
            alt="currency"
            className="w-300 h-300 object-contain"
          />
        </div>

        <div className="max-w-md border border-gray-600 rounded-lg p-6 backdrop-blur-lg bg-purple-700/50 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencyOptions={options}
                amount={amount}
                onAmountChange={(currency) => setAmount(currency)}
                selectCurrency={from}
                onCurrencyChange={(currency) => {
                  console.log(currency, "currency");
                  return setFrom(currency);
                }}
                className="bg-black/50 text-white font-bold"
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={(currency) => setConvertedAmount(currency)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                currencyOptions={options}
                className="bg-black/50 text-white font-bold"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

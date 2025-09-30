import React from "react";
import { useId } from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`${className} p-3 rounded-lg text-sm flex bg-white`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId} //binding the input to the label
          className={`mb-2 inline-block ${
            className.includes("bg-black") ? "text-white/70" : "text-black/40"
          }`}
        >
          {label}
        </label>
        <input
          id={amountInputId} //same as the label
          className={`outline-none w-full bg-transparent py-1.5 ${
            className.includes("bg-black")
              ? "text-white placeholder-white/50"
              : "text-black placeholder-black/50"
          }`}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p
          className={`mb-2 w-full ${
            className.includes("bg-black") ? "text-white/70" : "text-black/40"
          }`}
        >
          Currency Type
        </p>
        <select
          className={`rounded-lg px-1 py-1 cursor-pointer outline-none ${
            className.includes("bg-black")
              ? "bg-gray-700 text-white"
              : "bg-gray-100 text-black"
          }`}
          disabled={currencyDisabled}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

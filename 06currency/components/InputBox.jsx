import React from 'react';


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false
}) {
  
  return (
    <div className='bg-white p-3 rounded-lg text-sm flex'>
      <div className='w-1/2'>
        <label 
        className='text-black/40 mb-2 inline-block'>{label}</label>
        <input 
          className='outline-none w-full bg-transparent py-1.5'
          type='number'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-col justify-start items-end ml-auto'>
        <p className='text-black/40 mb-2 '>Currency</p>
        <select
          className='rounded-lg px-1 py-2 bg-gray-100 cursor-pointer outline-none'
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange &&
          onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} 
            value={currency}>
              {currency}
              </option>
          ))}
        </select>
      </div>
    </div>
  );
}



export default InputBox;

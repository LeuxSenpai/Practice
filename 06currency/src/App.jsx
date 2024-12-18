import { useState } from 'react';
import './index.css';
import useCurrencyInfo from '../hooks/useCurrency';
import InputBox from '../components/InputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
  };

  const convertCurrency = () => {
    if (currencyInfo && currencyInfo[toCurrency]) {
      setConvertedAmount(amount * currencyInfo[toCurrency]);
    } else {
      setConvertedAmount(0); // Or set to a default value or error handling
    }
  };
  

  const handleAmountChange = (value) => {
    setAmount(value);
  };
  

  return (
    <div 
      className="flex flex-wrap w-full items-center justify-center h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/395434.jpg)`,
        
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => { e.preventDefault(); convertCurrency(); }}>
            <div className='w-full mb-4'> {/* Increased margin bottom */}
              <InputBox 
                label='From' 
                amount={amount} 
                currencyOptions={options}
                onCurrencyChange={setFromCurrency} 
                selectedCurrency={fromCurrency}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className='w-full relative h-0.5 mb-4'> {/* Increased margin bottom */}
              <button 
                type='button' 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-sm bg-blue-600 text-white px-2 py-0.5' 
                onClick={swapCurrencies}
              >
                Swap
              </button>
            </div>
            <div className='w-full mt-4 mb-4'> {/* Increased margin top and bottom */}
              <InputBox 
                label='To' 
                amount={convertedAmount} 
                currencyOptions={options}
                onCurrencyChange={setToCurrency} 
                selectedCurrency={toCurrency}
                amountDisabled
              />
            </div>
            <button 
              type='submit' 
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg mb-4' // Increased margin bottom
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

# Currency Converter App

This project is a React-based currency converter that allows users to convert between different currencies. It features an interactive UI with the ability to swap currencies and dynamically update the conversion based on user inputs.

## Features
- Convert between multiple currencies.
- Automatically calculates converted values based on real-time exchange rates.
- Swap functionality to exchange "From" and "To" currencies.
- Responsive UI with modern design elements.
- Input validation and dynamic updates.

## Project Setup

### Prerequisites
- Node.js and npm installed on your system.
- A code editor like VS Code.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to view the app.

## Code Explanation

### Key Components

#### `useState` Hook
Used to manage the state of:
- Input amount (`amount`)
- Selected "From" currency (`fromCurrency`)
- Selected "To" currency (`toCurrency`)
- Converted amount (`convertedAmount`):
```javascript
const [amount, setAmount] = useState(0);
const [fromCurrency, setFromCurrency] = useState("USD");
const [toCurrency, setToCurrency] = useState("INR");
const [convertedAmount, setConvertedAmount] = useState(0);
```

#### Swap Functionality
Allows users to swap the "From" and "To" currencies with a single click:
```javascript
const swapCurrencies = () => {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
  setConvertedAmount(amount);
};
```

#### Currency Conversion Logic
- Fetches exchange rates dynamically using a custom hook (`useCurrencyInfo`).
- Performs calculations based on the current rate for the selected currencies:
```javascript
if (currencyInfo && currencyInfo[toCurrency]) {
  setConvertedAmount(amount * currencyInfo[toCurrency]);
} else {
  setConvertedAmount(0);
}
```

#### Input Handling
Dynamically updates the amount and currency selection based on user inputs:
```javascript
const handleAmountChange = (value) => {
  setAmount(value);
};
```

#### Form Submission
The app prevents default form submission and triggers the conversion process:
```javascript
<form onSubmit={(e) => { e.preventDefault(); convertCurrency(); }}>
```

### Styling with Tailwind CSS
- The app uses Tailwind CSS for a modern and responsive UI.
- Examples:
  - `bg-cover bg-no-repeat`: Adds a background image to the app.
  - `w-full max-w-md mx-auto`: Centers the content and defines a maximum width.
  - `backdrop-blur-sm bg-white/30`: Creates a frosted glass effect for the container.

### Components
- **`InputBox`**: A reusable component for handling currency input and selection.
  - Props include:
    - `label`: Label for the input box (e.g., "From", "To").
    - `amount`: The value displayed in the input box.
    - `currencyOptions`: A list of available currencies for selection.
    - `onCurrencyChange`: Callback for when the selected currency changes.
    - `selectedCurrency`: The currently selected currency.
    - `amountDisabled`: A flag to disable input editing for read-only fields.

## Technologies Used
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the app.
- **Custom Hooks**: To fetch and manage currency data.

## Future Enhancements
- Add a search functionality for currency selection.
- Display real-time conversion rates below the form.
- Integrate a third-party API for accurate and up-to-date exchange rates.

## License
This project is licensed under the MIT License.

---

Feel free to contribute or suggest improvements!


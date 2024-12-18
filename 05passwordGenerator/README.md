# Password Generator App

This project is a React-based password generator that creates secure and customizable passwords. Users can specify the length of the password and choose to include numbers and special characters, making it a versatile tool for generating strong passwords.

## Features
- Generate random passwords with customizable options.
- Options to include:
  - Numbers
  - Special characters
- Adjustable password length (6 to 100 characters).
- One-click copy to clipboard functionality.
- Responsive and modern UI styled with Tailwind CSS.

## Project Setup

### Prerequisites
- Node.js and npm installed on your system.
- A code editor like VS Code.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/password-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd password-generator
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
- Password length (`length`)
- Inclusion of numbers (`numberAllowed`)
- Inclusion of special characters (`characterAllowed`)
- Generated password (`password`):
```javascript
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [characterAllowed, setCharacterAllowed] = useState(false);
const [password, setPassword] = useState("");
```

#### `useCallback` and `useEffect` Hooks
- `passGen`: A function wrapped in `useCallback` to generate passwords based on user preferences.
- Automatically updates the password whenever the length, numberAllowed, or characterAllowed state changes:
```javascript
useEffect(() => {
  passGen();
}, [length, numberAllowed, characterAllowed, passGen]);
```

#### Password Generation Logic
- Base string includes uppercase and lowercase letters.
- Appends numbers and special characters if the respective options are enabled:
```javascript
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if (numberAllowed) str += '0123456789';
if (characterAllowed) str += "',./;][=-!#£$%^&*()";
```
- Password is generated randomly based on the selected length.

#### Copy to Clipboard
Allows users to copy the generated password with a single click:
```javascript
onClick={() => navigator.clipboard.writeText(password)}
```

### Styling with Tailwind CSS
- The app uses Tailwind CSS for modern and responsive styling.
- Examples:
  - `w-full max-w-lg mx-auto`: Centers the container.
  - `bg-blue-600 text-white px-3 py-2`: Styles the "Copy" button.
  - `cursor-pointer`: Adds interactivity to the range slider.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: A fast development build tool.
- **Tailwind CSS**: For styling the app.

## Future Enhancements
- Add an option to exclude similar-looking characters (e.g., O, 0, l, I).
- Add a strength indicator for generated passwords.
- Save user preferences to local storage for persistence.

## License
This project is licensed under the MIT License.

---

Feel free to contribute or suggest improvements!


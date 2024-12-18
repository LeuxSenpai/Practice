# React Color Changer App

This project demonstrates a simple React application that allows users to change the background color of the screen using buttons. It leverages React's `useState` hook to manage the state of the background color dynamically. The app is styled using Tailwind CSS for a clean and responsive design.

## Features
- Dynamically change the background color by clicking buttons.
- Predefined color options: Red, Blue, Green, Yellow, and Black.
- Smooth color transition effect.
- Responsive and modern UI built with Tailwind CSS.

## Project Setup

### Prerequisites
- Node.js and npm installed on your system.
- A code editor like VS Code.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-color-changer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-color-changer
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
The `useState` hook is used to manage the current background color of the app. The initial state is set to `olive`:
```javascript
const [color, setColor] = useState('olive');
```

#### Color Buttons
Each button has an `onClick` event handler to update the background color when clicked:
```javascript
<button onClick={() => setColor("red")} className='outline-none px-4 py-1 hover:bg-red-700 bg-red-500 text-white shadow-lg'>Red</button>
```

#### Dynamic Styling
The background color of the main `<div>` is dynamically updated using the `color` state:
```javascript
<div className='w-full h-screen duration-200' style={{ backgroundColor: color }}></div>
```

### Styling with Tailwind CSS
The app is styled using Tailwind CSS classes for responsiveness and modern aesthetics. For example:
- `w-full h-screen` ensures the background spans the entire viewport.
- `hover:bg-red-700` adds a hover effect to buttons.
- `fixed inset-10 flex items-center justify-center` centers the button container.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: A fast development build tool.
- **Tailwind CSS**: For styling the app.

## Future Enhancements
- Add more color options.
- Include a color picker for custom colors.
- Save the selected color to local storage for persistence.

## License
This project is licensed under the MIT License.

---

Feel free to contribute or suggest improvements!


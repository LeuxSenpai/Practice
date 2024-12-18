# Multi-Section React Website

This project is a multi-section React-based website showcasing various components, including a hero section, program details, testimonials, campus gallery, and more. Each section is designed as a reusable component to enhance modularity and scalability.

## Features
- **Responsive Navigation Bar:** A modern NavBar for seamless site navigation.
- **Hero Section:** Engaging introduction with a call-to-action.
- **Dynamic Title Component:** Displays subtitles and main titles for sections.
- **Program and About Sections:** Highlight programs and provide additional details with interactive functionality.
- **Gallery and Testimonials:** Visually appealing campus photos and student feedback.
- **Video Player:** Embedded video player with play/pause functionality.
- **Contact Section:** A form to enable user communication.
- **Footer:** Concludes the website with essential links and information.

## Project Setup

### Prerequisites
- Node.js and npm installed on your system.
- A code editor like VS Code.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/multi-section-react-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd multi-section-react-website
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

#### State Management
- `playState`: A boolean state to control the video player's play/pause functionality:
```javascript
const [playState, setPlaySet] = useState(false);
```

#### Component Overview
- **NavBar:** Provides navigation links to different sections of the website.
- **Hero:** Acts as the landing section with introductory content.
- **Title:** Displays subtitles and titles dynamically for each section:
```javascript
<Title Subtile={'Gallery'} Title={'Campus photos'} />
```
- **Program:** Highlights available programs.
- **About:** Includes an interaction to trigger video playback using `setPlaySet`.
- **Campus:** Showcases gallery images of the campus.
- **Testimonial:** Displays feedback from students or users.
- **Contact:** A form to collect user inquiries or messages.
- **Footer:** Contains the website's footer details.
- **Videoplayer:** Controls the video playback state:
```javascript
<Videoplayer playState={playState} setPlaySet={setPlaySet} />
```

### Styling
The app uses CSS for styling, with responsive design principles applied across components. Background images and section designs are tailored to improve visual appeal:
```javascript
style={{
  backgroundImage: `url(https://wallpaperaccess.com/full/395434.jpg)`,
}}
```

## Technologies Used
- **React:** For component-based UI development.
- **CSS:** For responsive and modern styling.
- **State Management:** Managing states using React's `useState` hook.

## Future Enhancements
- Add animations and transitions for smoother user interactions.
- Integrate a backend service for dynamic content updates.
- Add multilingual support for broader accessibility.
- Improve SEO and performance.

## License
This project is licensed under the MIT License.

---

Feel free to contribute or suggest improvements!


# TypeDash! 🖋️💨

**TypeDash!** is a typing speed calculator that measures your typing speed in words per minute (WPM) and accuracy. It fetches random sentences from a custom API you built and deployed, offering a unique challenge every time. The app is built using **React** and **Tailwind CSS**, providing a clean and responsive user interface.

### Working Link - [Click Here!](https://typing-speed-test-chi.vercel.app/)

## 🚀 Features

- **Dynamic Sentence Fetching**: Sentences are fetched from a custom API, ensuring a fresh experience every time.
- **Real-Time Speed and Accuracy Tracking**: Calculates your words per minute (WPM) and accuracy as you type.
- **Responsive Design**: Tailwind CSS ensures that the UI adapts smoothly across different screen sizes.
- **Modular Components**: Reusable and well-structured React components.

  ![image](https://github.com/user-attachments/assets/920193f9-e54f-403f-b785-bd24b5fab3b5)

## 📂 Project Structure

```bash
TypeDash/
├── public/              # Static assets and index.html
├── src/
│   ├── assets/          # Static files like images
│   ├── components/
│   │   ├── Displaytext.jsx   # Component to display the sentence to type
│   │   ├── Input.jsx         # Input component where users type
│   │   ├── Results.jsx       # Component to display WPM and accuracy
│   │   └── Timer.jsx         # Component to manage and display the timer
│   ├── App.css          # Global styles
│   ├── App.jsx          # Main application component
│   ├── CustomHook.js    # Custom hook for fetching API data
│   ├── index.css        # Additional global styles
│   ├── main.jsx         # Entry point of the React app
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Files and directories to ignore in version control
├── README.md            # Project documentation
├── index.html           # Base HTML file
├── package-lock.json    # Lockfile for npm dependencies
└── package.json         # Project metadata and dependencies

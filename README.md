# Lottery App

This project is a Lottery App designed to help people play the lottery in real life. It allows users to shuffle and draw lottery cards, hear the corresponding audio of each card, and view the last three drawn cards. The app is built with React, making it interactive and user-friendly.

## Features

- **Shuffle Cards**: Randomly shuffle the deck of lottery cards.
- **Play Audio**: Automatically play the audio associated with each card.
- **Auto-Play**: Option to automatically play the next card after a specified interval.
- **View Previous Cards**: Display the last three drawn cards.
- **Settings Menu**: Customize the auto-play interval and enable/disable auto-play.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/lottery-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd lottery-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to see the app in action.

## Components

- **App**: The main component that holds the state and renders the child components.
- **Card**: Displays the current lottery card.
- **Button**: A reusable button component.
- **Settings**: A form to customize auto-play settings.
- **PastCard**: Displays the previous lottery cards.

## State Management

The app uses React hooks to manage state:

- **useState**: Manages the state for playing cards, current card index, playing status, audio files, image files, interval seconds, settings menu state, and auto-play status.
- **useEffect**: Preloads audio and image files, and handles the auto-play functionality.
- **useCallback**: Memoizes functions to avoid unnecessary re-renders.
- **useMemo**: Memoizes the card, audio, and image data to improve performance.

## Audio Playback

The app uses the HTML5 Audio API to play the corresponding audio for each card. The audio files are preloaded and managed using `useState` and `useMemo`.

## Customization

### Adding New Cards

1. **Update the `cards.js` file**:
   ```javascript
   const cards = [
     {
       title: "Card Title",
       img: "path/to/image.jpg",
       audio: "path/to/audio.mp3",
     },
     // Add more cards as needed
   ];
   export default cards;
   ```

2. **Place your audio and image files** in the appropriate directories and update the paths in the `cards.js` file.

### Changing the Auto-Play Interval

- The default auto-play interval is 1.8 seconds. You can change this by modifying the `intervalSeconds` state in the `App` component or through the settings menu in the app.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact the repository owner.

---

Thank you for using the Lottery App! Enjoy playing and good luck!

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

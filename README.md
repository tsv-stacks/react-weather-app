# Weather App

This is a weather app that allows users to search for the current weather and forecast of a city.

This was one of the first apps I built using React and helped me learn about props, state, snapshot & component testing.

## Features

### Search for a City

Currently you can get the current location weather details for any city in the world, however the forecast will only work for cities in the UK. This fun little ~~bug~~ feature is due to the current location using the OpenWeather API to make requests whereas the forecast makes an API request to a custom backend server.

### Future Features

- [ ] Dark & Light Mode
- [ ] Sunrise and Sunset Images
- [ ] BG changes depending on time of day
- [x] Location component icons
- [ ] Switch completely to openWeather API

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the [OpenWeather API](https://openweathermap.org/api).

The app also uses the axios library to make API requests to the OpenWeather API and the moment library to format the date and time.

## Installation

To install the app, clone the repository to your local machine and run npm install to install the necessary dependencies.

```bash
git clone https://github.com/tsv-stacks/react-weather-app
cd react-weather-app
npm install
```

To use this app, you will need to create your own `.env` file with your OpenWeather API key. You can get your own API key by signing up for a free account on the [OpenWeather website](https://openweathermap.org/api).

After signing up, create a `.env` file in the root of the project and add the following line, replacing {YOUR_API_KEY} with your actual API key:

```
REACT_APP_API_KEY={YOUR_API_KEY}
```

Make sure to restart the development server after making changes to the `.env` file.

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

The application uses [Jest](https://jestjs.io/) as its testing framework.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Credit

Photo by <a href="https://unsplash.com/@_dorian_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dorian Mongel</a> on <a href="https://unsplash.com/photos/9zQkRU9IsDk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@chentianlu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Henry Chen</a> on <a href="https://unsplash.com/photos/x7clQSWhlfE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

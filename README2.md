# Read Native Screen
### React Native Navigation
npm install @react-navigation/native react-native-screens react-native-safe-area-context 

# React Native Tailwind
### Native wind
npm install nativewind tailwindcss@3 postcss autoprefixer --dev

### tailwindcss file creation 
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

### babel.config file
module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: ['react-native-reanimated/plugin'],
};

### global.css file where the App.tsx file is present
@tailwind base;
@tailwind components;
@tailwind utilities;

### metro.config.js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

module.exports = withNativeWind(config, {input: './global.css'});


### App.tsx file
import "./global.css";

### add the classname to any of the files 
className="flex-1 bg-red-500" // for checking
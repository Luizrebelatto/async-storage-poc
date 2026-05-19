# Async Storage (Doc)[https://react-native-async-storage.github.io/3.0/#usage]
A library that provides an asynchronous, unencrypted, persistent, key-value storage API.

## Use cases

### App Theme
- The user selects the desired theme, which is then saved in the app's memory
```javascript
const value = await AsyncStorage.getItem("theme-color");
AsyncStorage.setItem("theme-color", currentTheme);
```
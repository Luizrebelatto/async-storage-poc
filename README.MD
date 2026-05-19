# Async Storage
A library that provides an asynchronous, unencrypted, persistent, key-value storage API.

## Functions

#### getItem
- used to retrieve a value stored locally on the device.
```javascript
const value = await AsyncStorage.getItem('key')
```
```javascript
const user = await AsyncStorage.getItem('user')
// {"age": 25, "name": "Luiz"}
```
- JSON.parse(user) -> convert string to object 
- key -> value you want to retrieve
- Return `string | null`

#### setItem
- used to save values locally on the device
- when you pass an objeto you need `stringify` serialize the object to a JSON string
```javascript
async function saveUser() {
  const user = {
    name: 'Luiz',
    age: 25,
  }

  await AsyncStorage.setItem(
    'user',
    JSON.stringify(user)
  )
}
```


## Use cases

### App Theme
- The user selects the desired theme, which is then saved in the app's memory
```javascript
const value = await AsyncStorage.getItem("theme-color");
AsyncStorage.setItem("theme-color", currentTheme);
```

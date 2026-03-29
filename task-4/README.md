# 🌦️ Weather App with API Integration

## 📌 Objective

Build a simple weather application that fetches and displays real-time weather data based on user input (city name) using a public API.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Displays temperature in Celsius
* ☁️ Shows weather description
* 💧 Displays humidity level
* ⚠️ Error handling for invalid input or API failure

---

## 🛠️ Technologies Used

* **HTML** – Structure of the application
* **CSS** – Styling (external stylesheet)
* **JavaScript (Fetch API)** – Fetching and handling API data
* **Weather API** – `wttr.in` (no API key required)

---

## 📄 HTML Overview

* Input field for city name
* Search button to trigger API call
* Display section for:

  * City name
  * Temperature
  * Weather description
  * Humidity

---

## ⚙️ JavaScript Functionality

### 🔹 Function: `getWeather()`

#### Steps:

1. Get city name from input field
2. Validate input (check if empty)
3. Call API using Fetch
4. Parse JSON response
5. Extract required data
6. Update DOM elements
7. Handle errors

---

## 🌐 API Used

### wttr.in API

```
https://wttr.in/{city}?format=j1
```

### Sample Response Structure

```json
{
  "current_condition": [
    {
      "temp_C": "30",
      "humidity": "70",
      "weatherDesc": [
        { "value": "Partly cloudy" }
      ]
    }
  ]
}
```

---

## 🧠 Code Explanation

### Fetch API Call

```javascript
const response = await fetch(url);
const data = await response.json();
```

### Extract Data

```javascript
const current = data.current_condition[0];
```

### Update UI

```javascript
document.getElementById("temperature").innerText =
  `Temperature: ${current.temp_C} °C`;
```

---

## ⚠️ Error Handling

* Alerts user if input is empty
* Catches network/API errors using `try...catch`

```javascript
catch (error) {
    alert("Error fetching data");
}
```

---

## 📸 Output Example

```
City: Chennai  
Temperature: 32°C  
Weather: Sunny  
Humidity: 65%
```

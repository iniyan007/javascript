async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const current = data.current_condition[0];

        document.getElementById("cityName").innerText = city;
        document.getElementById("temperature").innerText = `Temperature: ${current.temp_C} °C`;
        document.getElementById("description").innerText = `Weather: ${current.weatherDesc[0].value}`;
        document.getElementById("humidity").innerText = `Humidity: ${current.humidity}%`;
        document.getElementById("cityInput").value = "";

    } catch (error) {
        alert("Error fetching data");
    }
}